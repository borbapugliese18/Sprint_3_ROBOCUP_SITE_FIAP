const scrollDiv = document.querySelector(".scrollTop")

scrollDiv.addEventListener("onclick",scrollToTop())

function scrollToTop(){
    window.scrollTo(0, 0);
}

if(screen.width < 1188){
    document.getElementById('netuno_href').setAttribute('href', "#");
    document.getElementById('quem_somos_href').setAttribute('href', "#");
    
} else{ 
    document.getElementById('netuno_href').setAttribute('href', "sobre_netuno.html");
    document.getElementById('quem_somos_href').setAttribute('href', "quem_somos.html");
}
