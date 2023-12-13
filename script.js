
function setTheme(){
     const color1 = 'red';
     const color2 = 'green';
     const color3 = 'yellow';

     const button =  document.querySelector('.theme');
     let root = document.querySelector(':root');
     var a =0 
          // let i =0;
     // for(i = 0; i <= 3;i++){
     button.addEventListener('click',()=>{
     a = a+1;

          if (a ==3){
               root.style.setProperty('--main-color',`${color1}`);
               // root.style.setProperty('--text-color',`yellow`);
          }
          else if(a==2){
               root.style.setProperty('--main-color',`${color2}`);
               // root.style.setProperty('--text-color',`#0ef`);
          }
          else if(a==1){
               root.style.setProperty('--main-color',`${color3}`);
               // root.style.setProperty('--text-color',`pink`);
          }
          else{
            a =0;
          }
               
    })      
   
}
setTheme();





let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick=()=>{
     menuIcon.classList.toggle('bx-x');
     nav.classList.toggle('active');
};


/*=scroll  section active link*/




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
      sections.forEach( sec => {
                    let top=window.scrollY;
                    let offset=sec.offsetTop;
                    let height=sec.offsetHeight;
                    let id=sec.getAttribute('id');
      
                    if(top >= offset && top < offset +height) {
                    
                      navlinks.forEach(links =>{
                           links.classList.remove('active');
                           document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                      });

                    };
            });
            let header=document.querySelector('header');

            header.classList.toggle('sticky', window.scrollY>100);





          /*==============click to scroll*/
          menuIcon.classList.remove('bx-x');
          nav.classList.remove('active');


};

ScrollReveal({
     reset:true,
     distance:'80px',
     duration:2000,
     delay:200
});
ScrollReveal().reveal('.home-content,.heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .education-container, .skills-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'})












