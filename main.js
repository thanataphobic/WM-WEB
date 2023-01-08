 // The fade effect on the main thumbnail
 const checkpoint = 300;
 window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".front").style.opacity = opacity;
 });

// Width of the sidenav and margin
function openNav() {
    document.getElementById("sideNav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}
// width of the sidebar when closed
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}