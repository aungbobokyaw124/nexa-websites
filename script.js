const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
hamburger.addEventListener('click',()=>{navLinks.classList.toggle('active')});
document.querySelectorAll('.nav-links a').forEach(link=>{link.addEventListener('click',()=>{navLinks.classList.remove('active')})});
document.querySelectorAll('.faq-question').forEach(button=>{button.addEventListener('click',()=>{const answer=button.nextElementSibling;const icon=button.querySelector('.faq-icon');document.querySelectorAll('.faq-answer').forEach(item=>{if(item!==answer&&item.classList.contains('active')){item.classList.remove('active');item.previousElementSibling.querySelector('.faq-icon').textContent='+'}});answer.classList.toggle('active');icon.textContent=answer.classList.contains('active')?'−':'+'})});
window.addEventListener('scroll',()=>{const navbar=document.getElementById('navbar');if(window.scrollY>50){navbar.style.background='rgba(11,31,58,.98)';navbar.style.boxShadow='0 2px 10px rgba(0,0,0,.3)'}else{navbar.style.background='rgba(11,31,58,.95)';navbar.style.boxShadow='none'}});
