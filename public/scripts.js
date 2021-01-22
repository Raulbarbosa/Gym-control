const currentPage = location.pathname //verifica o path em que estamos
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems){
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}