let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = ""; //未滑動時無陰影
  } else {
    nav.style.boxShadow = "0 6px 6px -6px #777";
  }
});

// narbar active
let navItem = document.querySelectorAll(".nav-active-item");
let navbarBrand = document.querySelector(".navbar-brand");

navItem.forEach((item) =>
  item.addEventListener("click", (e) => {
    navItem.forEach((i) => {
      i.classList.remove("navItem-active");
    });
    item.classList.add("navItem-active");
  })
);

navbarBrand.addEventListener("click", () => {
  navItem.forEach((i) => {
    i.classList.remove("navItem-active");
  });
});
