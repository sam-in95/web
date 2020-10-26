$(function(){
    
    $('a[href="#"]').click(function(e) {
	   e.preventDefault();
    });
    
    //sub_menu
    $(".sub_click").click(function(){
            $(".sub_dept2 li").stop().slideUp();
            $(".sub_menu_title").css({"color":"9f9f9f","font-weight":"400"});
            $(".arrow").css({"transform":"rotate(0deg)","margin-top":"23px","margin-left":"190px"});
        
            $(this).find(".sub_dept2 li").stop().slideDown(300);
            $(this).find(".sub_menu_title").css({"color":"#1e3d7d","font-weight":"700"});
            $(this).find(".arrow").css({"transform":"rotate(180deg)","margin-top":"7px","margin-left":"180px"});
            
    });
    $(".sub_menu").mouseleave(function(){
        $(".sub_dept2 li").stop().slideUp();
        $(".sub_menu_title").css({"color":"#9f9f9f","font-weight":"400"});
        $(".arrow").css({"transform":"rotate(0deg)","margin-top":"23px","margin-left":"190px"});
    });
    //sub_menu
    
    var eventBtn = $(".event_tap li");
    
    eventBtn.click(function(){
        eventBtn.removeClass("tap");
        $(this).addClass("tap");
    });
    
    eventBtn.eq(0).click(function(){
        $(".prize").hide();
        $(".ing_event").show();
    });
    eventBtn.eq(1).click(function(){
        $(".ing_event").hide();
        $(".prize").show();
    });
    
    var pageNum = $(".prize_page_num li");
    pageNum.click(function(){
        pageNum.removeClass("now");
        $(this).addClass("now");
    });
    
    $(".prev2").click(function(){
        pageNum.removeClass("now");
        pageNum.eq(0).addClass("now");
    });
    $(".next2").click(function(){
        pageNum.removeClass("now");
        pageNum.eq(3).addClass("now");
    });
    
    var currentIndex = 0;
    $(".next").click(function(){
        
        var currentIndex = $(".now").index();
        
        if(currentIndex < 3){
            currentIndex++;
        }else if(currentIndex = 3){
            currentIndex = 3;
        }
        
        pageNum.removeClass("now");
        pageNum.eq(currentIndex).addClass("now");
    });
    $(".prev").click(function(){
        
        var currentIndex = $(".now").index();
        
        if(currentIndex > 0){
            currentIndex--;
        }else if(currentIndex = 0){
            currentIndex = 0;
        }
        
        pageNum.removeClass("now");
        pageNum.eq(currentIndex).addClass("now");
    });
});