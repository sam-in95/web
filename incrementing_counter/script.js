const $counters = document.querySelectorAll('.counter');

$counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    // Number(counter.getAtrribute('data-target')) 도 가능
    const c = +counter.innerText;

    const increment = target / 200;
    // 적당히 넣으면 됨

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
