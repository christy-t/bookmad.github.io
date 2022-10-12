
      $("#lp33").click(function () {
        document.getElementById("main_img1").style.backgroundImage = "url('../../img/activity/lp33.png')";
         document.getElementById("main_img2").style.backgroundImage = "url('../../img/activity/lp332.png')";
         document.getElementById("main_img3").style.backgroundImage = "url('../../img/activity/m2lp33.png')";
       
        document.getElementById("main_project_name").innerHTML = "LP33 One-page-Web";
        document.getElementById("main_project_content").innerHTML = "One-Page-Web、RWD、CSS、HTML、Javascript、jQuery";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
       
       $("#mask").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/activity/mask.png')";
             document.getElementById("main_img2").style.backgroundImage = "url('../../img/activity/mask2.png')";
             document.getElementById("main_img3").style.backgroundImage = "url('../../img/activity/mask3.png')";
           
            document.getElementById("main_project_name").innerHTML = "Mask stock searching tool";
            document.getElementById("main_project_content").innerHTML = "got 2600K page views, earn it a ranking of top three in google searching engine. Get Government open data by using Python, AWS Lambda + API gateway";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        $("#rapidtest").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/activity/rapidtest1.png')";
            document.getElementById("main_img2").style.backgroundImage = "url('../../img/activity/rapidtest2.png')";
            document.getElementById("main_img3").style.backgroundImage = "url('../../img/activity/rapidtest.png')";
           
            document.getElementById("main_project_name").innerHTML = "Rapidtest stock searching tool";
            document.getElementById("main_project_content").innerHTML = "Based on last experience of developing mask searching tool,it launch on the first time and ranking the first on the google SEO";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        $("#forum").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/activity/a1.png')";
            document.getElementById("main_img2").style.backgroundImage = "url('../../img/activity/a2.png')";
            document.getElementById("main_img3").style.backgroundImage = "url('../../img/activity/am1.png')";
           
            document.getElementById("main_project_name").innerHTML = "One-Page-Web";
            document.getElementById("main_project_content").innerHTML = "One-Page-Web、RWD、CSS、HTML、Javascript、jQuery";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        $("#other").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/activity/question.png')";
            document.getElementById("main_img2").style.backgroundImage = "url('../../img/activity/lasova2.png')";
            document.getElementById("main_img3").style.backgroundImage = "url('../../img/activity/aso2019.png')";
           
            document.getElementById("main_project_name").innerHTML = "One-Page-Web in question type";
            document.getElementById("main_project_content").innerHTML = "One-Page-Web、RWD、CSS、HTML、Javascript、jQuery";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        $("#keyword").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/activity/keyword1.png')";
            document.getElementById("main_img2").style.backgroundImage = "url('../../img/activity/keyword2.png')";
            document.getElementById("main_img3").style.backgroundImage = "url('../../img/activity/zz3.png')";
           
            document.getElementById("main_project_name").innerHTML = "Article followed with relative ad function";
            document.getElementById("main_project_content").innerHTML = "Get all article with relative keywords using AWS Cloudsearch, users can add keywords to update relative ADs in these releted articles (Java Spring MVC, JSP, CSS, Javascript)";
            window.scrollTo({ top: 0, behavior: 'smooth' });

        });
        $("#sp").click(function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/activity/sp1.png')";
            document.getElementById("main_img2").style.backgroundImage = "url('../../img/activity/sp2.png')";
            document.getElementById("main_img3").style.backgroundImage = "url('../../img/activity/sp11.png')";
           
            document.getElementById("main_project_name").innerHTML = "Project type web";
            document.getElementById("main_project_content").innerHTML = "Develop Content Management Sysyem, users can edit content, banner, content image... (Java Spring MVC, JSP)";
           
        });

        $("#erp").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/erp.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../../img/erp1.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../../img/erp2.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "Education Dashboard";
            document.getElementById("main_project_content").innerHTML = "The dashboard contain many issue which is cared by school. These dashboard can present school status. The system is for DEMO";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        $("#game").click(function () {
            document.getElementById("main_img1").style.backgroundImage = "url('../../img/game1.jpg')";
            document.getElementById("main_img2").style.backgroundImage = "url('../../img/game4.jpg')";
            document.getElementById("main_img3").style.backgroundImage = "url('../../img/game5.jpg')";
           
            document.getElementById("main_project_name").innerHTML = "Brain Game";
            document.getElementById("main_project_content").innerHTML = "The system provides 17 games to strenthen old people's brain. There are dashboard to present game record,in which users can look up their playing record.";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
     
        $('#playButton i').click(function () {
            if ($(this).hasClass('fa-play')) {
                console.log("d")
                $('#playButton .fa').removeClass('fa-play');
                $('#playButton .fa').addClass(' fa-pause');
                $('#carouselExampleIndicators').carousel('cycle');
            }else{
                console.log("s")
                $('#playButton .fa').removeClass('fa-pause');
                $('#playButton .fa').addClass(' fa-play');
                $('#carouselExampleIndicators').carousel('pause');
            }
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
                  
                        if (active == 0) {
                            document.getElementById("progress_bar").style.width = "66%";
                        } else if (active == 1) {
                            document.getElementById("progress_bar").style.width = "100%";
                        } else {
                            document.getElementById("progress_bar").style.width = "33%";
                        }
                        next = $(this).next('li').data('slide-to');
                    }
                });              
            });
        });


        $('#fullScreen i').click(function () {
        var element=document.getElementById('carouselExampleIndicators');
        $(' .header-carousel-item').height('90vh');
        if ($(this).hasClass('fa-expand')) {
            $('#fullScreen i').removeClass('fa-expand');
            $('#fullScreen i').addClass(' fa-compress');
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }else{
            $(' .header-carousel-item').height('60vh');
            $('#fullScreen i').removeClass('fa-compress');
            $('#fullScreen i').addClass(' fa-expand');
            screenfull.exit();
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
