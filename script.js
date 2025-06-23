const menuBtn = document.querySelector(".menu-button");
const dropDown = document.querySelectorAll(".category-item-link");
const subMenus = document.querySelectorAll(".category-sub-items");
const follow = document.querySelector(".form-button");
const followDropDown = document.getElementById("follow-button");
const heroMedia = document.querySelectorAll(".hero-secton-media");
const videos = document.querySelectorAll(".hero-section-media_video");
menuBtn.addEventListener("click", () => {
  document.body.toggleAttribute("data-category-mobile-menu-open");
});

dropDown.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const subMenu = subMenus[index];
    const isOpen = subMenu.classList.contains("open");

    subMenus.forEach((menu) => {
      menu.style.height = "0";
      menu.classList.remove("open");
    });

    if (!isOpen) {
      const fullHeight = subMenu.scrollHeight + "px";
      subMenu.style.height = fullHeight;
      subMenu.classList.add("open");
    }
  });
});

follow.addEventListener("click", () => {
  followDropDown.classList.toggle("visible");
});

heroMedia[0].setAttribute("current", "");
videos[0].play();

const currentTimes = [];
videos.forEach((video, index) => {
  video.addEventListener("timeupdate", () => {
    currentTimes[index] = video.currentTime;
  });
  video.addEventListener("ended", () => {
    const nextIndex = (index + 1) % videos.length;

    heroMedia.forEach((e) => {
      e.removeAttribute("current");
      e.removeAttribute("previous");
    });
    heroMedia[index].setAttribute("previous", "");
    heroMedia[nextIndex].setAttribute("current", "");
    videos[nextIndex].play();
  });
  heroMedia[0].setAttribute("current", "");
});

const category = document.querySelectorAll(".category");
const animationEl = document.querySelectorAll(".Animation");
const brandingEl = document.querySelectorAll(".Branding");
const mobileEl = document.querySelectorAll(".Mobile");
const printEl = document.querySelectorAll(".Print");
const productDesignEl = document.querySelectorAll(".Product-design");
const typographyEl = document.querySelectorAll(".Typography");
const webDesignEl = document.querySelectorAll(".Web-design");
const illustrationEl = document.querySelectorAll(".Illustration");
const discover = document.querySelectorAll(".ss-container");

discover.forEach((el) => (el.style.display = "block"));
category.forEach((item, index) => {
  item.addEventListener("click", () => {
    const categoryId = item.getAttribute("id");
    category.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
    discover.forEach((el) => (el.style.display = "none"));

    if (categoryId == "Animation") {
      animationEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Branding") {
      brandingEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Discover") {
      discover.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Mobile") {
      mobileEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Print") {
      printEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Product-design") {
      productDesignEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Typography") {
      typographyEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Web-design") {
      webDesignEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "Illustration") {
      illustrationEl.forEach((el) => (el.style.display = "block"));
    } else if (categoryId === "ss-container") {
      discover.forEach((el) => (el.style.display = "block"));
    }
  });
});

const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((el) => {
  el.addEventListener("click", () => {
    const count = el.parentElement.querySelector(".likes-count");
    let current = +count.textContent;
    if (el.classList.contains("liked")) {
      el.classList.remove("liked");
      count.textContent = current - 1;
    } else {
      el.classList.add("liked");
      count.textContent = current + 1;
    }
  });
});
