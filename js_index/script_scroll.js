const scrollDiv = document.querySelector(".scrollTop")

scrollDiv.addEventListener("onclick",scrollToTop())

function scrollToTop(){
    window.scrollTo(0, 0);
}