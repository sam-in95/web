const $buttons = document.querySelectorAll('.ripple');

$buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // 클릭위치

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // 버튼위치

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // 버튼 내부 클릭위치

    const $circle = document.createElement('span');
    $circle.classList.add('circle');
    $circle.style.top = yInside + 'px';
    $circle.style.left = xInside + 'px';

    e.target.appendChild($circle);
    // function함수에선 this가능

    setTimeout(() => {
      $circle.remove();
    }, 500);
  });
});
