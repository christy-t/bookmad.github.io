        $("#book").click(function () {

            document.getElementById("main_img1").style.backgroundImage = "url('../img/book.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/book1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/book2.jpg')";
           

            document.getElementById("main_project_name").innerHTML = "Movie&Book sharing";
            document.getElementById("main_project_content").innerHTML = 
            "Using Hexo blog framwork to share movie and books. Addind page is using Markdown,which can fasten speed of viewing web.";

        });
        $("#erp").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../img/erp.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/erp1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/erp2.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "Education Quality Management System";
            document.getElementById("main_project_content").innerHTML =
             " The dashboard contain many issue which is cared by school. These dashboard can present school status. The system is for DEMO"
            ;
        });
        $("#game").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../img/game1.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/game4.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/game5.jpg')";
          
            document.getElementById("main_project_name").innerHTML = "Brain Game";
            document.getElementById("main_project_content").innerHTML = 
            "The system provides 17 games to strenthen old people's brain. There are dashboard to present game record,in which users can look up their playing record.";
        });
        $("#gameadmin").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../img/game_admin.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/game_admin2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/game_admin3.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "Brain Game Management";
            document.getElementById("main_project_content").innerHTML = "Provide admin to Manage user's data(CRUD using Php)";
        });
        $("#dcc").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../img/company1.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/company2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/company3.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "Company ";
            document.getElementById("main_project_content").innerHTML = "Company's web which is using Wordpress, some pages were modified by css and html.";
        });
        $("#attendance").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../img/record.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/record2.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/record1.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "Student Attendanec Systen";
            document.getElementById("main_project_content").innerHTML = "The system can export students' attendance list (for Taipei Expreiment School)";
        });
        $("#vinam").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../img/vinam5.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/vinam4.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/vinam2.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "Vietnam Sightseeing Dashboard";
            document.getElementById("main_project_content").innerHTML = "Using morris.js to produce visualization.";
        });
        $("#taitune").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../img/taitune.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../img/taitune1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../img/taitune2.jpg')";
            
            document.getElementById("main_project_name").innerHTML = "Question and dashboard of Company's excibition ";
            document.getElementById("main_project_content").innerHTML = "Produce sheet .The dashboard present the questionnaire's result.The dashboard connect ASUS API to get PM2.5 data.";
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

