$(function(){
    
    $('a[href="#"]').click(function(e) {
	   e.preventDefault();
    });

    //banner
    var slideBtn = $(".slider_btn li")
    slideBtn.click(function(){
        
        var target = $(this);
        var index = target.index();
        
        slideBtn.removeClass("now");
        target.addClass("now");
        
        $(".imgslide").fadeOut();
        $(".imgslide").eq(index).fadeIn();
                
    });
    var current = 0;
    var bannerSlide;
    
    function startTimeInterval(){
        return setInterval(function(){

        var next = (current + 1)%3;
        
        $(".imgslide").eq(current).fadeOut();
        $(".imgslide").eq(next).fadeIn();
        
        current = next;
        
        slideBtn.removeClass("now");
        slideBtn.eq(current).addClass("now");
        
        },4000);
    }
    slideBtn.click(function(){
        current = $(this).index();
        
        var next = (current) % 3;
        $(".imgslide").eq(currnet).fadeOut();
        $(".imgslide").eq(next).fadeIn();

        clearInterval(startTimeInterval());
        bannerSlide = startTimeInterval();
    });

        bannerSlide = startTimeInterval();

    
    //banner
    
    //ticket_box
    var ticketBtn = $(".ticket_btn li");
    
    ticketBtn.click(function(){
        
        var target = $(this);
        var index = target.index();
        
        ticketBtn.removeClass("tap_on");
        target.addClass("tap_on");
        
        $(".box_con").hide();
        $(".box_con").eq(index).show();
    });
    
    var tripTypeBtn = $(".trip_type li");
    
    tripTypeBtn.click(function(){
        tripTypeBtn.removeClass("click");
        $(this).addClass("click");
    });
    
    //ticket_box
    
    //first_ko
     currentIndex = 0;
    $(".next").click(function(){
        $(".ko_now").stop().hide().animate({left:"860px"}).addClass("ko_1").removeClass("ko_now");
        $(".ko_next").stop().animate({left:"0px"}).addClass("ko_2").removeClass("ko_next");
        $(".ko_nnext").stop().show().animate({left:"430px"}).addClass("ko_3").removeClass("ko_nnext");
        
        $(".ko_1").removeClass("ko_1").addClass("ko_nnext");
        $(".ko_2").removeClass("ko_2").addClass("ko_now");
        $(".ko_3").removeClass("ko_3").addClass("ko_next");
        
        
        if(currentIndex < 2){
            currentIndex++;
        }else{
            currentIndex = 0;
        }
        $(".ko_text").fadeOut();
        $(".ko_text").eq(currentIndex).fadeIn();
        
        
    });
    $(".prev").click(function(){
        $(".ko_now").stop().animate({left:"430px"}).addClass("ko_1").removeClass("ko_now");
        $(".ko_next").stop().animate({left:"860px"}).addClass("ko_2").removeClass("ko_next");
        $(".ko_nnext").stop().animate({left:"0"}).addClass("ko_3").removeClass("ko_nnext");
        
        $(".ko_1").removeClass("ko_1").addClass("ko_next");
        $(".ko_2").removeClass("ko_2").addClass("ko_nnext");
        $(".ko_3").removeClass("ko_3").addClass("ko_now");
        
        
        if(currentIndex > 0){
            currentIndex--;
        }else{
            currentIndex = 2;
        }
        $(".ko_text").fadeOut();
        $(".ko_text").eq(currentIndex).fadeIn();
        
        
    });
    //first_ko
    
    
});