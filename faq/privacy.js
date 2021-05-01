function sidebar_open(){
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.add("sidebarani");
    sidebar.classList.remove("sidebar");
}

function sidebar_close(){
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.add("sidebar");
    sidebar.classList.remove("sidebarani");
}