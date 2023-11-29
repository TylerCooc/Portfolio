let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});
window.onscroll = () => {
    navbar.classList.remove("active");
};

function redirectGitHub1(){
    window.open("https://github.com/TylerCooc/MedTaker", "_blank");
}
function redirectGitHub2(){
    window.open("https://github.com/TylerCooc/Touchless-Locker", "_blank");
}
function redirectGitHub3(){
    window.open("https://github.com/TylerCooc/FileSorter", "_blank");
}