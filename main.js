let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onClick =() =>{
    menuIcon.classList.toggle('fax-xmark')
    navbar.classList.toggle('active');
}

let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top =window.scrollY ;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        if(top >= offset && top <= offset + height ){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };
        
    });
    let header =document.querySelector('header');
    header.classList.toggle('sticky'.window.scrollY > 100);


    menuIcon.classList.remove('fax-xmark');
    navbar.classList.remove('active');


}

