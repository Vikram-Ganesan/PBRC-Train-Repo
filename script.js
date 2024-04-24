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
// !SHOW LIST

let list = document.getElementById("stationList");
let s_list = document.getElementById("stationList");

console.log(list);
let input = document.getElementById("source-station");
input.addEventListener("focus", (f) => {
    console.log(f.target.getAttribute("id"));
    if (f.target.getAttribute("id") == "source-station") {
        list.style.display = "block";

    }

})
s_list.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === "SPAN") {
        console.log(e.target.getAttribute('value'));
        input.value = e.target.getAttribute('value');
        list.style.display = 'none'; // Hide the list
        
    }
    // list.removeEventListener("click", () => {});

});
let destination = document.getElementById("destination-station");
destination.addEventListener("focus", (e) => {
    console.log(e.target.getAttribute('id'));
    if (e.target.getAttribute('id') === "destination-station") {
        list.setAttribute("id", "stationList1");
        list.style.display = "block";
        list.addEventListener('click', function (f) {
            if (f.target && f.target.nodeName === "SPAN") {
                destination.value = f.target.getAttribute('value');
                list.style.display = 'none';
              
            }
            list.setAttribute("id", "stationList");

        });
       
        
        list.removeEventListener("click", () => {});
    }
});


