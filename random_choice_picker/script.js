const $tags = document.getElementById('tags');
const $textarea = document.getElementById('textarea');

$textarea.focus();

$textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    // 엔터 누르면 textarea 초기화하고 randomSelect 함수 실행
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  // 스페이스, 공백 제거 살펴보기

  $tags.innerHTML = '';

  tags.forEach((tag) => {
    const $tag = document.createElement('span');
    $tag.classList.add('tag');
    $tag.innerText = tag;
    $tags.appendChild($tag);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);
    // 랜덤하게 뽑아온 tags로 highlightTag 함수 실행

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    //interval times * 100 후에 종료

    setTimeout(() => {
      const randomTag = pickRandomTag();
      // 다시 랜덤 뽑아서

      highlightTag(randomTag);
      //times * 100 후에 종료
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
  // tags 중 랜덤하게 뽑아줌
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
