const aside = document.querySelector('main > aside fieldset');
const filterTargets = document.querySelectorAll('section .product-card');

aside.addEventListener('input', (event) => {
  const category = event.target.value;

  function filter() {
    filterTargets.forEach((item) => {
      item.parentNode.style.display =
        item.dataset?.categories?.includes(category) ||
        category === 'everything'
          ? null
          : 'none';
    });
  }

  filter();
});

// get the users motion preference
const { matches: motionOK } = window.matchMedia(
  '(prefers-reduced-motion: no-preference)'
);
