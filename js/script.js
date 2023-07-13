let prevScrollPosition = window.scrollY || window.pageYOffset;

window.addEventListener("scroll", function(){
    let currentScrollPosition = window.scrollY || window.pageXOffset;

    if (prevScrollPosition > currentScrollPosition){
        document.querySelector(".navbar").classList.remove("navbar-hidden");
    }else{
        document.querySelector(".navbar").classList.add("navbar-hidden");
    }

    prevScrollPosition = currentScrollPosition;

}
)
