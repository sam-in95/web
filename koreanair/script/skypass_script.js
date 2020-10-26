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
});