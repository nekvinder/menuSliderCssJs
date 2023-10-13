const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item-has-children");
// const subMenuItems = document.querySelectorAll('.submenu-item-has-children');
const subMenuTitles = document.querySelectorAll(".menu-title");
const backMenu = document.getElementById("back");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

// subMenuItems.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     item.classList.add('show-childsubmenu');
//     subMenuItems.forEach((item2, index2) => {
//       if (index !== index2) {
//         item2.classList.remove('show-childsubmenu');
//       }
//     })
//   })
// })

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

console.log(menuItems, subMenuTitles);
