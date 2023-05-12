window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

document.getElementById("toTop").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

$(document).ready(function() {

    $(".fa-search").click(function() {
        $(".search-box").toggle();
        $("input[type='text']").focus();
    });

});

    const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");
    let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
}
    // js code to toggle dark and light mode
    modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    // js code to keep user selected mode even page refresh or file reopen
    if(!body.classList.contains("dark")){
    localStorage.setItem("mode" , "light-mode");
}else{
    localStorage.setItem("mode" , "dark-mode");
}
});
    // js code to toggle search box
    searchToggle.addEventListener("click" , () =>{
    searchToggle.classList.toggle("active");
});


    //   js code to toggle sidebar
    sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
    body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
    nav.classList.remove("active");
}
});