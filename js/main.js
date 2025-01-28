const open = document.getElementById("open-modal");
const modal = document.getElementById("modal-container");
const close = document.getElementById("close-modal");
const menuIcon = document.querySelector("#menu-icon")
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

open.addEventListener("click", () => {
    modal.style.display = 'flex'; // Asegura que el modal sea visible
    requestAnimationFrame(() => {
        modal.classList.add('show'); // Añade la clase para la animación
    });
});

close.addEventListener("click", (event) => {
    modal.classList.remove('show'); // Elimina la clase para ocultar el modal
    setTimeout(() => {
        modal.style.display = 'none'; // Oculta completamente después de la animación
    }, 500); // Tiempo igual a la duración de la transición
});

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').forEach(link => {
                    link.classList.add('active')})
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}