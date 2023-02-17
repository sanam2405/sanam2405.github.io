const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const typing = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('typingDemo');
        } else {
            entry.target.classList.remove('typingDemo');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hiddenScroll');
const hiddenElementsTop = document.querySelectorAll('.hiddenScrollTop');
const hiddenElementsDown = document.querySelectorAll('.hiddenScrollDown');
const typingDemo = document.querySelectorAll('.typingDemo');
hiddenElements.forEach((element) => observer.observe(element));
hiddenElementsTop.forEach((element) => observer.observe(element));
hiddenElementsDown.forEach((element) => observer.observe(element));
typingDemo.forEach((element) => typing.observe(element));