// phew… not a lot going on here. Please add some code!

const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("bookmark--active");
  });
});
