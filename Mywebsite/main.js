/*Show Menu*/ 
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
        navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


/*Menu hidden*/ 
if(navClose){
    navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
    })
}
/*Remove Menu Mobile*/
const navLink=document.querySelector('.nav__link')

  const linkAction=()=>{
      const navMenu=document.getElementById('nav-menu')
     navMenu.classList.remove('show-menu')
 }
//   navLink.forEach(n =>n.addEventListener('click',navLink)) 

//  /*Change Background Header */
 const blurHeader =()=>{
    const header=document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
                      :header.classList.remove('blur-header')
 }
 window.addEventListener('scroll',blurHeader)
    
 
 //Skills


//  const skillsContent=document.getElementsByClassName('skills__content'),
//  skillsHeader=document.querySelectorAll('.skills__header')
//  function toggleSkills(){
//     let itemClass=this.parentNode.className
//     for(i=0; i<skillsContent.length;i++){
//         skillsContent[i].className='skills__content skills__close'
       
//     }
//     if(itemClass =='skills__content skills__close'){
//         this.parentNode.className='skills__content skills__open'
//     }
//  }
//  skillsHeader.forEach((eL)=>{
//     eL.addEventListener('click',toggleSkills)
//  })

// /*Qualification */

// const tabs=document.querySelectorAll('[data-target]'),
//        tabContents=document.querySelectorAll('[data-content]')
// tabs.forEach(tav=>{
// tabContents.addEventListener('click',()=>{
// const target=document.querySelector(tab.dataset.target)
// tabContents.forEach(tabContent=>{
//     tabContent.classList.remove('qualification__active')
// })
// target.classList.add('qualification__active')
// tab.forEach(tab=>{
//     tab.classList.remove('qualification__active')
// })
// tab.classList.add('qualification__active')
// })
// }) 

var closeIcons = document.getElementsByClassName('nav__link');
var i = closeIcons.length;
while (i--)
  closeIcons[i].addEventListener("click", closeBigImgAndContainer);


function closeBigImgAndContainer()
{
    navMenu.classList.remove('show-menu')
};


var closeIcons = document.getElementsByClassName('nav__logo');
var i = closeIcons.length;

while (i--)
  closeIcons[i].addEventListener("click", closeBigImgAndContainer);


function closeBigImgAndContainer()
{
    navMenu.classList.remove('show-menu')
};

/*ScrollUp */

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350? scrollUp.classList.add('show-scroll')
                          :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true  
})
sr.reveal('.home__data,.home__social, .contact__container,.footer__container')
sr.reveal('.home__image',{origin:'bottom'})
sr.reveal('.about__data, .skill__data',{origin:'left'})
sr.reveal('.about__image, skills__content',{origin:'right'})
sr.reveal('.skills__content, .qualification__container',{interval:100})


/*Email */
const contactForm=document.getElementById('contact-form')
       

       
function clear(){
        document.forms[0].reset();
    }
const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_a4hl8xq','template_ydujgda','#contact-form','S0wheUQkAnskE-0P9')
    .then( ()=>{
        clear();
        alert("Mesaj Gönderildi");
    } ) 
}
contactForm.addEventListener('submit',sendEmail)





// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
// });
// $('.back-to-top').click(function () {
//     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//     return false;
//     });
