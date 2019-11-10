window.onscroll = function funkcja() {

    var l = document.documentElement.scrollTop/650;
    
    if( document.documentElement.scrollTop > 100) {
        document.getElementById("navbarr").classList.remove("bg-custom");
        document.getElementById("navbarr").classList.add("bg-light");
        document.getElementById("navbarr").classList.remove("navbar-dark");
        document.getElementById("navbarr").classList.add("navbar-light");
        document.getElementById("effect").setAttribute('style', 'background-color: rgba(0,0,0,'+l+');');
    }
    else {
        document.getElementById("navbarr").classList.add("bg-custom");
        document.getElementById("navbarr").classList.remove("bg-light");
        document.getElementById("navbarr").classList.add("navbar-dark");
        document.getElementById("navbarr").classList.remove("navbar-light");
        document.getElementById("effect").setAttribute('style', 'background-color: rgba(0,0,0,0);');
    }
}