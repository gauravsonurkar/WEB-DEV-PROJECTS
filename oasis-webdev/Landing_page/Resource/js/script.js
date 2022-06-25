const hamburger = document.querySelector('.mobile-nav-icon');
const sidebar = document.querySelector('.main-nav');
const backDrop = document.querySelector('.backdrop');

hamburger.addEventListener('click', sidebarToggle);
backDrop.addEventListener('click', sidebarToggle);



function sidebarToggle() {
  sidebar.classList.toggle('active');
  backDrop.classList.toggle('active');
  
}

window.addEventListener('scroll',function(){
  const navbar = document.querySelector('.main-nav');
  navbar.classList.toggle('sticky',this.window.scrollY>700)
})
