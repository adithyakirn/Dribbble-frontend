const menuBtn = document.querySelector(".menu-button")
const dropDown =document.querySelectorAll(".category-item-link")
const subMenus = document.querySelectorAll(".category-sub-items")
const follow = document.querySelector(".form-button")
const followDropDown = document.getElementById("follow-button")

menuBtn.addEventListener("click", () => {
    document.body.toggleAttribute("data-category-mobile-menu-open")
})

dropDown.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault()

        const subMenu = subMenus[index]
        const isOpen = subMenu.classList.contains("open")

        subMenus.forEach((menu) => {
            menu.style.height = "0"
            menu.classList.remove("open")
        })

        if(!isOpen){
            const fullHeight = subMenu.scrollHeight + "px"
            subMenu.style.height = fullHeight
            subMenu.classList.add("open")
        }
    })
})

follow.addEventListener("click", () =>{
    followDropDown.classList.toggle("visible")
})