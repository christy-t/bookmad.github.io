filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("categorybtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



var $nav = $('#navBar'),
    $full = $nav.find('.fullWrap'),
    $button = $('.navButton');

// 點擊主選單
$('.navList > li > a').on('click', function(e) {
    var $ele = $(this).parent('li'),
        boxH = $ele.find('.subBox').height(),
        both = $ele.add($nav);

    // 如果有子項目才執行動作
    if ($ele.hasClass('subLink')) {
        e.preventDefault();
        $('.navList li').not($ele).removeClass('active');
        if ($ele.hasClass('active')) {
            both.removeClass('active');
            $full.css('height', 'auto');
        } else {
            both.addClass('active');
            // 如果子項目沒有超過一列，就隱藏 more 按鈕
            boxH <= 50 ? $ele.find('.more').removeClass('show') : $ele.find('.more').addClass('show');
            // 如果存在open選擇器，而且子項目有超過一列，fullWrap才有高度變化
            $('.navList').hasClass('open') && boxH > 50 && !$button.hasClass('open') ? $full.css('height', boxH + 50) : $full.css('height', 85);
            $button.hasClass('open') ? $full.css('height', 'auto') : '';
        }
    }
});

// 點擊更多
$nav.find('li.more').on('click', function() {
    var $ele = $(this).parents('li');
    $('.navList').add($nav.find('li.more')).toggleClass('open');
    // 如果存在open選擇器，而且子項目有超過一列，fullWrap才有高度變化
    $('.navList').hasClass('open') && $ele.find('.subBox').height() > 50 && !$button.hasClass('open') ? $full.css('height', $ele.find('.subBox').height() + 50) : $full.css('height', 85);
    $button.hasClass('open') ? $full.css('height', 'auto') : '';
});

// 點擊按鈕
$button.on('click', function() {
    $('.navList li').removeClass('active');
    $button.add($('.navList, .subNav, .navButtonBar')).toggleClass('open');
});

// 按鈕為展開時
if ($button.hasClass('open')) {
    $('.navList li').on('click', function(e) {
        e.preventDefault();
        $(this).find('.subBox')[0] ? $(this).toggleClass('dropdown') : location.href = jQuery('a[href]', this).attr('href');
        $full.css('height', 'auto');
    });
}

// 電腦版校稿縮放時使用，在行動裝置上面滑動會直接重置
$(window).on('resize', function() {
    if ($(this).width() <= 1024) {
        $('.navList li').removeClass('active');
        $nav.removeClass('active');
        $full.css('height', 'auto');
        $('.navList').add($nav.find('li.more')).removeClass('open');
        $button.add($('.navList, .subNav, .navButtonBar')).removeClass('open');
    }
});