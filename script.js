// --------------- header section script start------------
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var nytmode = document.querySelector('#nytMode').addEventListener('click', bgchange);

function bgchange(){
    document.querySelector('body').style.backgroundColor = '#222';
}
// --------------- header section script end------------

// if(window.scrollY > 60){
//     document.querySelector('#scroll-top').classList.add('active');
// } else {
//     document.querySelector('#scroll-top').classList.remove('active');
// }
