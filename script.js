document.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

function nightMode() {
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let generate_but = document.querySelector('.button');
    if (document.getElementById('night_mode').checked) {
        body.style.backgroundColor = 'black';
        body.style.color = 'rgb(0, 200, 0)';
        generate_but.classList.add('night');
        document.querySelectorAll('.text_inputs').forEach((item) => {
            item.style.borderColor = 'rgb(0, 250, 0)';
        })
        document.querySelectorAll('.input_span').forEach((span) => {
            span.style.borderColor = 'rgb(0, 250, 0)';
            span.style.backgroundColor = 'black';
        })
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        generate_but.classList.remove('night');
        document.querySelectorAll('.text_inputs').forEach((item) => {
            item.style.borderColor = 'black';
        })
        document.querySelectorAll('.input_span').forEach((span) => {
            span.style.borderColor = 'black';
            span.style.backgroundColor = 'white';
        })
    }
    header.style.backgroundColor = body.style.backgroundColor;
}

var typed = new Typed(".welcome", {
    strings: ["Welcome to the CyberWeb site:) The only site you can feel secured!"],
    typeSpeed: 50,
    loop: false,
    showCursor: false
})

function password_generator() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
    let nr_of_letters = document.getElementById('nr_letters').value;
    let nr_of_digits = document.getElementById('nr_digits').value;
    let nr_of_symbols = document.getElementById('nr_symbols').value;
    let pass_length = parseInt(nr_of_letters) + parseInt(nr_of_digits) + parseInt(nr_of_symbols);
    let gen_pass = [];
    for (let i = 1; i <= nr_of_letters; i++) {
        gen_pass.push(letters[Math.floor(Math.random()*letters.length)]);
    }
    for (let i = 1; i <= nr_of_digits; i++) {
        gen_pass.push(digits[Math.floor(Math.random()*digits.length)]);
    }
    for (let i = 1; i <= nr_of_symbols; i++) {
        gen_pass.push(symbols[Math.floor(Math.random()*symbols.length)]);
    }
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }
    document.getElementById('generated_pass').innerText = shuffle(gen_pass);
}