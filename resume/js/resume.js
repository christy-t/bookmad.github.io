
        $("#book").click(function () {

            document.getElementById("main_img1").style.backgroundImage = "url('img/book.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/book1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/book2.jpg')";
            document.getElementById("gotolink1").href = "https://bookmad.github.io";

            document.getElementById("main_project_name").innerHTML = "Movie&Book sharing";
            document.getElementById("main_project_content").innerHTML = "運用Hexo網誌框架建置分享電影與書籍的BLOG，新增文章以Markdown功能撰寫，讓網頁能夠流暢瀏覽。";

        });
        $("#erp").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/erp.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/erp1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/erp2.jpg')";
            document.getElementById("gotolink1").href = "http://host02.iiiedu.org.tw/QERP/";
            document.getElementById("main_project_name").innerHTML = "教育品質管理系統";
            document.getElementById("main_project_content").innerHTML = " 運用多個儀錶板分析縣市教育所關心議題，供教育局或學校警覺，本系統為DEMO版本。";
        });
        $("#game").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/game1.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/game4.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/game5.jpg')";
            document.getElementById("gotolink1").href = "http://mobile.gyrigym.com/";
            document.getElementById("main_project_name").innerHTML = "銀髮族健腦平台";
            document.getElementById("main_project_content").innerHTML = " 提供多款健腦遊戲供銀髮族活化腦力，並利用遊玩log紀錄建立圖表分析供使用者查看遊玩歷程。";
        });
        $("#gameadmin").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/game_admin.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/game_admin2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/game_admin3.jpg')";
            document.getElementById("gotolink1").href = "";
            document.getElementById("main_project_name").innerHTML = "銀髮族健腦後台管理系統";
            document.getElementById("main_project_content").innerHTML = " 帳號管理停權等";
        });
        $("#dcc").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/company1.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/company2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/company3.jpg')";
            document.getElementById("gotolink1").href = "";
            document.getElementById("main_project_name").innerHTML = "公司部門網站";
            document.getElementById("main_project_content").innerHTML = " 以wordpress架設公司中心網站，裡頭使用css與html修改客置頁面。";
        });
        $("#attendance").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/record.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/record2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/record1.jpg')";
            document.getElementById("gotolink1").href = "";
            document.getElementById("main_project_name").innerHTML = "學生出缺勤系統";
            document.getElementById("main_project_content").innerHTML = " 供台北影視音實驗學校匯出學生出缺勤紀錄。";
        });
        $("#vinam").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/vinam5.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/vinam4.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/vinam2.jpg')";
            document.getElementById("gotolink1").href = "";
            document.getElementById("main_project_name").innerHTML = "越南觀光儀表板";
            document.getElementById("main_project_content").innerHTML = " 利用morris.js套件製作各個視覺化圖表。";
        });
        $("#taitune").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/taitune.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/taitune1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/taitune2.jpg')";
            document.getElementById("gotolink1").href = "";
            document.getElementById("main_project_name").innerHTML = "公司部門展示廳訪客問卷";
            document.getElementById("main_project_content").innerHTML = " 供訪客填寫展場問卷，並進而以儀錶板呈現問卷結果，儀錶板本身接華碩雲盒子偵測PM2.5,有接API的功能";
        });

        $('#playButton').click(function () {
            $('#carouselExampleIndicators').carousel('cycle');
        });
        $('#pauseButton').click(function () {
            $('#carouselExampleIndicators').carousel('pause');
        });
        $(function () {
            var active = '';
            var next = null;
            $('#carouselExampleIndicators').on('slide.bs.carousel', function () {
                $('.carousel-indicators li').each(function () {
                    if ($(this).hasClass('active')) {
                        active = $(this).data('slide-to');
                        // console.log(active);
                        if (active == 0) {
                            document.getElementById("progress_bar").style.width = "33%";
                        } else if (active == 1) {
                            document.getElementById("progress_bar").style.width = "66%";
                        } else {
                            document.getElementById("progress_bar").style.width = "100%";
                        }
                        next = $(this).next('li').data('slide-to');
                    }
                });
                //    console.log(active);
                //  if (active == 0) {
                //             document.getElementById("progress_bar").style.width = "33%";
                //         }else if(active == 1){
                //             document.getElementById("progress_bar").style.width = "66%";
                //         }else{
                //             document.getElementById("progress_bar").style.width = "100%";
                //         }
            });
        });

        //  $("#carouselExampleIndicators").on('slide.bs.carousel', function () {
        //         var newId = $(this).find('li.active').attr('data-slide-to');
        //         if (newId == 0) {
        //             document.getElementById("progress_bar").style.width = "33%";
        //         }else if(newId == 1){
        //             document.getElementById("progress_bar").style.width = "66%";
        //         }else{
        //             document.getElementById("progress_bar").style.width = "100%";
        //         }
        //     });


        $('#fullScreen').click(function () {


            if (screenfull.enabled) {
                document.getElementById("main_img1").style.height = "600px";
                document.getElementById("main_img2").style.height = "600px";
                document.getElementById("main_img3").style.height = "600px";
                screenfull.request(document.getElementById("popUpLeft"));
            }
        });

        $('#cancelFullScreen').click(function () {
            if (screenfull.enabled) {
                document.getElementById("main_img1").style.height = "450px";
                document.getElementById("main_img2").style.height = "450px";
                document.getElementById("main_img3").style.height = "450px";
                screenfull.exit();
            }
        });

        $(function () {
        $("#mydropdown").change(function () {
        var langCode = this.value;
     
                $.getJSON('lang/'+langCode+'.json', translate);
            
         });
    });

        $('#like').on('click',function(){
            
              $(this).html(Number($(this).html()) + 1);
            });
