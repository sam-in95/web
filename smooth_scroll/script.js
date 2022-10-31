const brake = 0.5;
const slowness = 0.85;
const accelerator = (window.innerWidth + window.innerHeight) / 2;
let oldScrollY = 0;
let scaleY = 0;

const updateCurve = () => {
  // Get new scroll
  const newScrollY = document.scrollingElement.scrollTop;
  // Get difference between previous scroll position
  const deltaY = (newScrollY - oldScrollY) * brake;
  // Remember current scroll position
  oldScrollY = newScrollY;
  // Calculate new scale
  const newScale = deltaY / accelerator;
  // Add new scale and slow it
  scaleY = (scaleY + newScale) * slowness;
  // Update CSS vars
  setStyle("--transform-top", minmax(-scaleY, 0, 1));
  setStyle("--transform-bottom", minmax(scaleY, 0, 1));
  // Again
  requestAnimationFrame(updateCurve);
};

requestAnimationFrame(updateCurve);

const minmax = (val, min, max) => Math.max(min, Math.min(max, val));
const setStyle = (property, value) =>
  document.body.style.setProperty(property, minmax(value, 0, 1).toFixed(4));

// Demo on load
$(document).ready((e) => {
  $("html,body").animate({ scrollTop: $(window).height() * 2 }, 500, () => {
    setTimeout(() => {
      $("html,body").animate({ scrollTop: 0 }, 500);
    }, 100);
  });
});
