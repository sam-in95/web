
$(function(){
    $("nav li").mouseenter(function(){
        $(this).find(".dept2").stop().slideDown(200);
    });
    $("nav li").mouseleave(function(){
        $(this).find(".dept2").stop().slideUp(200);
    });
    
    var clickCount = 0
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
    var a = 0;
    var b = 0;
    $(".rang").click(function(){
        a++;
        b=a%2;
        
        if(b==1){
            $(".rang_choice").slideDown();
            $(".rang .icon").css({"transform":"rotate(180deg)"});    
        }else{
            $(".rang_choice").slideUp();
            $(".rang .icon").css({"transform":"rotate(0deg)"});    
        }
    });
    
    //banner
    
    var slideBtn = $(".slide_btn li");
    
    
    slideBtn.click(function(){
        var target = $(this);
        var index = target.index();
        
        slideBtn.removeClass("slide_btn_tap");
        target.addClass("slide_btn_tap");
        
        $(".banner_back").css({"opacity":"0"});
        $(".big_ellip").css({"opacity":"0"});
        $(".banner_text").css({"opacity":"0","left":"-1500px"},1500);
        $(".banner_img").css({"opacity":"0","left":"2000px"},1500);
        
        $(".banner_box").eq(index).css({"opacity":"1"});
        $(".banner_back").eq(index).css({"opacity":"1"});
        $(".big_ellip").eq(index).css({"opacity":"1"});
        $(".banner_text").eq(index).css({"opacity":"1"}).animate({left:"450px"},500);
        $(".banner_img").eq(index).css({"opacity":"1"});
        
        if(index == 0){
            $(".small_ellip").css({"background-color":"#ffbd35"}); 
            $(".banner_img").eq(index).animate({left:"860px"},600);
        }else if(index == 1){
            $(".small_ellip").css({"background-color":"#c3c5e7"});
            $(".banner_img").eq(index).animate({left:"753px"},600);
        }else if(index == 2){
            $(".small_ellip").css({"background-color":"#efdcde"});
            $(".banner_img").eq(index).animate({left:"806px"},600);
        }else if(index == 3){
            $(".small_ellip").css({"background-color":"#d2d2d2"});
            $(".banner_img").eq(index).animate({left:"880px"},600);
        }
    });
    
//    var currentIndex = 0;
//        
//    var autoSlide = setInterval(function(){
//        
//        slideBtn.click(function(){
//            currentIndex = slideBtn.index();
//        });
//                
//        if(currentIndex < 3){
//            currentIndex++;
//        }else if(currentIndex = 3){
//            currentIndex = 0;
//        }
//        
//        slideBtn.removeClass("slide_btn_tap");
//        slideBtn.eq(currentIndex).addClass("slide_btn_tap");
//        
//        $(".banner_back").css({"opacity":"0"});
//        $(".big_ellip").css({"opacity":"0"});
//        $(".banner_text").css({"opacity":"0","left":"-1500px"},1500);
//        $(".banner_img").css({"opacity":"0","left":"2000px"},1500);
//        
//        $(".banner_box").eq(currentIndex).css({"opacity":"1"});
//        $(".banner_back").eq(currentIndex).css({"opacity":"1"});
//        $(".big_ellip").eq(currentIndex).css({"opacity":"1"});
//        $(".banner_text").eq(currentIndex).css({"opacity":"1"}).animate({left:"450px"},500);
//        $(".banner_img").eq(currentIndex).css({"opacity":"1"});
//        
//        if(currentIndex == 0){
//            $(".small_ellip").css({"background-color":"#ffbd35"});
//            $(".banner_img").animate({left:"860px"},600);
//        }else if(currentIndex == 1){
//            $(".small_ellip").css({"background-color":"#c3c5e7"});
//            $(".banner_img").animate({left:"753px"},600);
//        }else if(currentIndex == 2){
//            $(".small_ellip").css({"background-color":"#efdcde"});
//            $(".banner_img").animate({left:"806px"},600);
//        }else if(currentIndex == 3){
//            $(".small_ellip").css({"background-color":"#d2d2d2"});
//            $(".banner_img").animate({left:"880px"},600);
//        }
//        
//        slideBtn.click(function(){
//            setTimeout(autoSlide, 1000);
//        });
//        
//        
//
//    },5000);
    if($(window).width() < 1023){
            clearInterval(autoSlide);
            $(".banner_box").css({"opacity":"1"});
            $(".banner_back").css({"opacity":"1"});
            $(".big_ellip").css({"opacity":"1"});
            $(".banner_text").css({"opacity":"1","left":"5vw"});
            $(".banner_img").css({"opacity":"1","left":"15%"});
        }
   

    //product
    var productBtn = $(".kategorie li");
    
    productBtn.click(function(){
        
        var target = $(this);
        var index = target.index();
        
        productBtn.removeClass("tap");
        target.addClass("tap");
        
        $(".product_item").hide();
        $(".product_item").eq(index).show();
    });
    //product
    
    //story
    var storyBox = $(".story_pick_box");
    
    storyBox.mouseenter(function(){
        storyBox.css({"height":"130px", "background-color": "#f9f9f9"});
        storyBox.find("img").hide();
        
        $(this).css({"height":"300px", "background-color": "#fff4d0"});
        $(this).find("img").show();
    });
    //story
    
    
});

