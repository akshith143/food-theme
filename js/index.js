window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').style.height = "50px";
        document.getElementById('nav-logo').style.width = "50px";
        document.getElementById('nav-logo').style.height = "50px";
        document.getElementById('header').style.backgroundColor = "#000000";
    }else{
        document.getElementById('header').style.height = "150px";
        document.getElementById('nav-logo').style.width = "150px";
        document.getElementById('nav-logo').style.height = "150px";
        document.getElementById('header').style.backgroundColor = "transparent";
    }
}