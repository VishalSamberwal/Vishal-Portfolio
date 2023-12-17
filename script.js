let selections = document.querySelector('section');
let navLinks = document.querySelector('header nav a ');
window.onscroll =() =>{
    selections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.h=getAttribute('id');
        if(top>= offset && top<offset + height){
            navLinks.forEach(Links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });



let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY >100);
};

var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navLinks");
var links=document.querySelector(".navLinks li");

togglebtn.addEventListener("click",function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed=new Typed(".input",{
    strings:["Frontend Developer", "Java Developer", "Web Developer..... "],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})