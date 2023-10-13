const menuItems = document.querySelectorAll(".menu-item-has-children a");
for (const item of menuItems) {
  item.addEventListener("click", () => {
    for (const item of menuItems) {
      item.parentElement.classList.remove("show-submenu");
    }
    console.log(1, item.parentElement, 1);
    console.log(2, item.parentElement.parentElement, 1);
    // item.classList.add("show-submenu");
    item.parentElement.classList.add("show-submenu");
    // item.parentElement.parentElement.parentElement.classList.add(
    //   "show-submenu",
    // );

    // const itemSubMenu = item.parentElement.querySelector(".sub-menu");
    // set display block
    // itemSubMenu.style.visibility = "visible";
    // itemSubMenu.style.top = "0";
    // itemSubMenu.style.left = "0";

    console.log(4, itemSubMenu);

    // item.classList.add("show-submenu-fly");
    // item.parentElement.classList.add("show-submenu-fly");
    // item.parentElement.parentElement.parentElement.classList.add(
    //   "show-submenu-fly",
    // );
    console.log(2, item, 2);
  });
}

//
// const menu = document.querySelector(".menu");
// console.log(menuItems);
// // const subMenuItems = document.querySelectorAll('.submenu-item-has-children');
// const subMenuTitles = document.querySelectorAll(".menu-title");
// const backMenu = document.getElementById("back");
//
// backMenu.addEventListener("click", () => {
//   for (const item of menuItems) {
//     item.classList.remove("show-submenu");
//     item.parentElement.classList.remove("show-submenu");
//   }
// });

//

//
// for (const item of menuItems) {
//   item.addEventListener("click", () => {
//     // for (const item of menuItems) {
//     //   item.classList.remove("show-submenu");
//     // }
//
//     // menu.classList.add("submenu-active");
//     this.classList.add("show-submenu");
//     console.log(2, this, 2);
//   });
// }

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

// subMenuTitles.forEach((title) => {
//   title.addEventListener("click", () => {
//     menu.classList.remove("submenu-active");
//   });
// });

// console.log(menuItems, subMenuTitles);
