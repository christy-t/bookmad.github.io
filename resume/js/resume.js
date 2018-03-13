
        $("#book").click(function () {

            document.getElementById("main_img1").style.backgroundImage = "url('img/book.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/book1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/book2.jpg')";
            

            document.getElementById("main_project_name").innerHTML = "Movie&Book sharing";
            document.getElementById("main_project_content").innerHTML = "運用Hexo網誌框架建置分享電影與書籍的BLOG，新增文章以Markdown功能撰寫，讓網頁能夠流暢瀏覽。";

        });
        $("#erp").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/erp.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/erp1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/erp2.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "教育品質管理系統";
            document.getElementById("main_project_content").innerHTML = "透過分析數據表幫助政府隨時掌握學校辦理績效成果與教師的教育品質，進而了解學生學習成效影響因素後給予補助及加強欠缺面相。";
        });
        $("#game").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/game1.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/game4.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/game5.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "銀髮族健腦平台";
            document.getElementById("main_project_content").innerHTML = "此專案解決舊式flash平台無法跨平台使用的限制，國內目前無針對銀髮族所設計的遊戲平台。本平台依銀髮族使用手機可能遇到的問題將介面進行改善，如: 遊戲說明、按鈕放大、遊戲規則簡單又能活化腦力、圖表呈現讓銀髮族輕易了解腦力狀態，為了預防現代銀髮族痴呆比率增高，此平台為預防勝於治療，讓銀髮族可隨時隨地、無裝置限制活化腦力。測試帳號/密碼:tt001/tt001";
        });
        $("#gameadmin").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/game_admin.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/game_admin2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/game_admin3.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "銀髮族健腦後台管理系統";
            document.getElementById("main_project_content").innerHTML = "帳號管理停權等";
        });
        $("#dcc").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/company1.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/company2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/company3.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "公司部門網站";
            document.getElementById("main_project_content").innerHTML = " 以wordpress架設公司中心網站，裡頭使用css與html修改客制頁面。";
        });
        $("#attendance").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/record.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/record2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/record1.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "學生出缺勤系統";
            document.getElementById("main_project_content").innerHTML = "解決台北影視音實驗學校原以EXCEL計算學生出缺勤紀錄而花費大量人力與時間，系統幫助老師快速匯出與查看學生出缺勤狀況。";
        });
        $("#vinam").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/vinam5.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/vinam4.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/vinam2.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "越南觀光分析數據系統";
            document.getElementById("main_project_content").innerHTML = "利用morris.js套件製作各個視覺化圖表，透過分析數據表幫越南政府規畫系統整合後可即時監測項目。";
        });
        $("#taitune").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('img/taitune.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('img/taitune1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('img/taitune2.jpg')";
            
            document.getElementById("main_project_name").innerHTML = "公司部門展示廳訪客問卷";
            document.getElementById("main_project_content").innerHTML = "供訪客填寫展場問卷，並進而以分析數據表呈現問卷結果，介接華碩雲盒子API呈現PM2.5等資訊。原展示場地以手寫紀錄訪客資訊，此系統解決員工整理紙本所花費的時間，且將資料自動呈現於分析數據表供員工了解訪客行為。";
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
