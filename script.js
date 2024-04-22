let barContainer = document.getElementById("barContainer");
barContainer.addEventListener("click", (e) => {
    e.preventDefault();
    let menuList = document.querySelectorAll("#menuList");
    barContainer.classList.toggle("changeBar");
    console.log(menuList);
    menuList.forEach((ele, i) => {
        console.log(ele);
        ele.classList.toggle("menuList");
    })



})
