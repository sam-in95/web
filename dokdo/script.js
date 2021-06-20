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