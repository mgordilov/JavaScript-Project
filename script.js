document.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

function openMenu() {
    let menuBtn = document.querySelector('.toggle_btn');
    let menuBtnIcon = document.querySelector('.toggle_btn i');
    let dropDownMenu = document.querySelector('.dropdown_menu');
    let pageLinks = document.querySelectorAll('.nav_but');
    function openDropDown() {
        dropDownMenu.classList.toggle('open');
        const menuIsOpen = dropDownMenu.classList.contains('open');
        menuBtnIcon.classList = menuIsOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
    menuBtn.onclick = openDropDown;
    pageLinks.forEach((nav_but) => {
        nav_but.onclick = openDropDown;
    })
}

addEventListener('load', openMenu);

function nightMode() {
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let generate_but = document.querySelector('.button');
    let formButton = document.querySelector('.f_button');
    let navMenu = document.querySelector('.dropdown_menu');
    if (document.getElementById('night_mode').checked) {
        body.style.backgroundColor = 'black';
        body.style.color = 'rgb(0, 200, 0)';
        generate_but.classList.add('night');
        formButton.classList.add('night');
        navMenu.style.backgroundColor = 'black';
        document.querySelectorAll('.text_inputs').forEach((item) => {
            item.style.borderColor = 'rgb(0, 250, 0)';
        })
        document.querySelectorAll('.input_span').forEach((span) => {
            span.style.borderColor = 'rgb(0, 250, 0)';
            span.style.backgroundColor = 'black';
        })
        document.querySelectorAll('.deencoder_inputs').forEach((textarea) => {
            textarea.style.borderColor = 'rgb(0, 250, 0)';
        })
        document.querySelectorAll('.form_inputs').forEach((formInput) => {
            formInput.style.borderColor = 'rgb(0, 250, 0)';
        })
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        generate_but.classList.remove('night');
        formButton.classList.remove('night');
        navMenu.style.backgroundColor = 'white';
        document.querySelectorAll('.text_inputs').forEach((item) => {
            item.style.borderColor = 'black';
        })
        document.querySelectorAll('.input_span').forEach((span) => {
            span.style.borderColor = 'black';
            span.style.backgroundColor = 'white';
        })
        document.querySelectorAll('.deencoder_inputs').forEach((textarea) => {
            textarea.style.borderColor = 'black';
        })
        document.querySelectorAll('.form_inputs').forEach((formInput) => {
            formInput.style.borderColor = 'black';
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
    if (pass_length < 8) {
        document.getElementById('generated_pass').innerText = 'Hey, dude. If you wish not to be hacked in ~3 minutes, you will need to have a longer password!';
    } else if (pass_length > 18) {
        document.getElementById('generated_pass').innerText = 'Well, this one might be tooooooooo long for some websites!';
    } else {
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
}


function caesarCipher(text, shift, decrypt = false) {
    shift = decrypt ? (26 - shift) % 26 : shift;
    
    function shiftCharacter(char) {
        const charCode = char.charCodeAt(0);
        let shiftedCharCode;
        
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
        } else {
            return char; // Non-alphabetic characters remain unchanged
        }
        
        return String.fromCharCode(shiftedCharCode);
    }
    
    const encryptedText = text.split('').map(shiftCharacter).join('');
    
    return encryptedText;
}
  
function encriptText() {
    const encodeInput = document.getElementById('encript');
    const decodeInput = document.getElementById('decript');
    
    const plaintext = encodeInput.value;
    const encryptedText = caesarCipher(plaintext, 4, false);
    
    decodeInput.value = encryptedText;
}

function decriptText() {
    const encodeInput = document.getElementById('encript');
    const decodeInput = document.getElementById('decript');
    
    const plaintext = decodeInput.value;
    const encryptedText = caesarCipher(plaintext, 4, true);
    
    encodeInput.value = encryptedText;
}

document.getElementById("encript").addEventListener("input", encriptText);
document.getElementById("decript").addEventListener("input", decriptText);
