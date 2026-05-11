const contactButton = document.querySelector("#contactButton");
const contactOptions = document.querySelector("#contactOptions");
const posterImages = document.querySelectorAll(".poster-frame img");
const qrImage = document.querySelector("#wechatQr");
const qrModal = document.querySelector("#qrModal");
const qrModalClose = document.querySelector("#qrModalClose");

contactButton.addEventListener("click", function () {
  contactOptions.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

posterImages.forEach(function (image) {
  const frame = image.parentElement;
  const title = image.dataset.title || image.alt || "Work image";

  frame.dataset.placeholder = title + " | Replace this image";

  image.addEventListener("error", function () {
    image.classList.add("is-missing");
  });
});

qrImage.addEventListener("error", function () {
  qrImage.classList.add("is-missing");
});

qrImage.addEventListener("click", function () {
  qrModal.classList.add("is-open");
  qrModal.setAttribute("aria-hidden", "false");
});

qrModalClose.addEventListener("click", function () {
  qrModal.classList.remove("is-open");
  qrModal.setAttribute("aria-hidden", "true");
});

qrModal.addEventListener("click", function (event) {
  if (event.target === qrModal) {
    qrModal.classList.remove("is-open");
    qrModal.setAttribute("aria-hidden", "true");
  }
});
