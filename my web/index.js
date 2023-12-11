let nav = document.querySelector("nav");

window.addEventListener("scroll", () =>{
    nav.classList.toggle("nav-scroll", window.scrollY > 0)
})

let allNav = document.querySelectorAll(".nav-Links li a");

allNav.forEach((item=>{
    item.addEventListener("click", ()=>{
        remove1();
        item.classList.add("active")
    })
}))

const remove1 =()=> allNav.forEach((item=>{
        item.classList.remove("active")
}))

let menuBtn = document.querySelector("nav button");
let navBtn = document.querySelector(".nav-Links");

menuBtn.addEventListener("click", ()=>{
    navBtn.classList.toggle("nav-Links-block")
})

let tabLinks = document.getElementsByClassName("tab-links ")
let tabcon = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(tabconn of tabcon){
        tabconn.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

const form = document.querySelector("form");
const moreEl = document.querySelector(".more");
const message = document.getElementById("message");
const email = document.getElementById("email");
const name1 = document.getElementById("name");

function sendEmail(){
    const bodyMessage = `Full Name: ${name1.value}<br> Email: ${email.value}<br> Message${message.value}`


    Email.send({
        SecureToken : "770e85b0-201c-4db6-a6f3-cfbaf78ff7ad ",
        Host : "smtp.elasticemail.com",
        Username : "hassanayomiposi7@gmail.com",
        Password : "34CF18BFB1965B124BE7D7FEC33B62378305",
        To : 'hassanayomiposi7@gmail.com',
        From : "hassanayomiposi7@gmail.com",
        Subject : message.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                // title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkinput(){
    const items = document.querySelectorAll(".item");

        for(const item of items){
            if(item.value == ""){
                item.classList.add("error");
                item.classList.remove("error");
            }
        }
    }


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkinput();
   

    if(name1 && email && message){
        sendEmail(); 
    } else if(!name1 && !email && !message){
        item.classList.add("items");
    }
})

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.header-container, .head-left', { origin: 'left' });
ScrollReveal().reveal('.header-container, .header-right', { origin: 'bottom' });
ScrollReveal().reveal('.about-container, .about-col-1, h2', { origin: 'top' });
ScrollReveal().reveal('.about-container, .about-col-2', { origin: 'right' });
ScrollReveal().reveal('.skills-container, .skills-left, h2', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .skills-right', { origin: 'bottom' });
ScrollReveal().reveal('.Portfolio-container, .project', { origin: 'bottom' });
ScrollReveal().reveal('.contact-container, .contact-left', { origin: 'left' });
ScrollReveal().reveal('.contact-container, .contact-right', { origin: 'right' });

const typed = new Typed('.more', {
    strings: ['Backend Development', 'Digital Marketing', 'Clothes and Accessories'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});