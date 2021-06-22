let mainHeader = document.querySelector('.main_header_wrap'),
  mainHeaderHover = document.querySelector('.main_header_hover_wrap');

mainHeader.addEventListener('mouseenter', function () {
  mainHeader.style.display = 'none';
  mainHeaderHover.style.display = 'block';
});

mainHeaderHover.addEventListener('mouseleave', function () {
  mainHeaderHover.style.display = 'none';
  mainHeader.style.display = 'block';

});

$('a').click(function (e) {
  e.preventDefault();
});

let noticeBtn = $('.notice_btn'),
  noticeCon = $('.notice_con');

noticeBtn.click(function () {
  var target = $(this);
  var index = target.index();

  noticeBtn.removeClass('notice_btn_click');
  noticeBtn.addClass('notice_btn_noclick');
  target.removeClass('notice_btn_noclick');
  target.addClass('notice_btn_click');

  noticeCon.css({ 'display': 'none', 'margin-left': '300px' });
  noticeCon.eq(index).fadeIn().css({ 'margin-left': '350px', 'transition': '0.5s' });
});


let noticeText = $('.notice_con_text');
for (var i = 0; i <= noticeText.length; i++) {
  let noticeConText = noticeText.eq(i);
  let changeText = (noticeConText.text()).substr(0, 110);
  noticeConText.text(changeText + '..');
}

let topBtn = $('.top_btn');
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    topBtn.fadeIn();
  } else if ($(this).scrollTop() <= 200) {
    topBtn.fadeOut();
  }
});
topBtn.click(function () {
  $('html, body').animate({ scrollTop: 0 }, 300);
});
