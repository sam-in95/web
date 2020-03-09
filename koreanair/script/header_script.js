$(function(){
    var $header = $(".main_header_back");
    var headerHeight = $header.outerHeight();
    
    $("nav > ul > li").mouseenter(function(){
        var subHeight = $(this).find(".sub_nav").outerHeight();
        
        $header.stop().animate({"height":headerHeight + subHeight},200);
        $(this).find(".sub_nav").show();
        $(".main_haeder_back").css({"border-bottom":"10px solid #000"});
    });
        
    $("nav > ul > li").mouseleave(function(){
        $header.stop().animate({"height":headerHeight},200);
        $(this).find(".sub_nav").hide();
    });
        
});