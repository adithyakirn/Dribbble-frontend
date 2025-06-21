const menuBtn = document.querySelector(".menu-button")
const dropDown =document.querySelectorAll(".category-item-link")
const subMenus = document.querySelectorAll(".category-sub-items")
menuBtn.addEventListener("click", () => {
    document.body.toggleAttribute("data-category-mobile-menu-open")
})

dropDown.forEach((item, index) => {
    item.addEventListener("click", (e) =>{
        e.preventDefault();

        const subMenu = subMenus[index]
        const isVisible = subMenu.style.height === "auto"

        subMenus.forEach(menu => {menu.style.display = "0"})
        
        subMenu.style.height = isVisible ? "0" : "auto"
    })
}) 