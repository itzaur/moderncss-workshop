const pictures = document.querySelectorAll("[data-name='light-box']");

const state = {
  open: false,
};

pictures.forEach((picture) =>
  picture.addEventListener('click', () => {
    if (!state.open) {
      lightboxImage(picture);
    }
  })
);

function lightboxImage(picture) {
  lightbox.innerHTML = picture.querySelector(':scope img').outerHTML;
  lightbox.showPopover();
}

lightbox.addEventListener('toggle', (event) => {
  state.open = event.newState === 'open';
});
