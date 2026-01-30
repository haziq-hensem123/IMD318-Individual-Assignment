const mainImage = document.getElementById("mainImage");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const thumbs = document.querySelectorAll(".thumb");
const flash = document.querySelector(".flash");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {

    if (thumb.classList.contains("active")) return;

    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");

    /* Animate out */
    mainImage.style.opacity = "0";
    mainImage.style.transform = "scale(0.95) rotateX(10deg)";
    title.style.opacity = "0";

    flash.classList.add("active");

    setTimeout(() => {
      flash.classList.remove("active");

      /* Swap image + text */
      mainImage.src = thumb.src;
      title.textContent = thumb.dataset.title;
      subtitle.textContent = thumb.dataset.sub;

      /* Animate in */
      mainImage.style.opacity = "1";
      mainImage.style.transform = "scale(1) rotateX(0)";
      title.style.animation = "none";
      title.offsetHeight; // reset animation
      title.style.animation = "textIn 0.8s ease forwards";
    }, 300);
  });
});

const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  flash.classList.add("active");

  setTimeout(() => {
    window.location.href = "website.html";
  }, 400);
});
