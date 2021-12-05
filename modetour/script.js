const topBtn = document.querySelector('.top_btn');

window.addEventListener('scroll', function () {
  let docuTop = document.documentElement.scrollTop;
  console.log(docuTop);

  if (docuTop > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

function goTop() {
  document.documentElement.scrollTop = 0;
}
topBtn.addEventListener('click', goTop);