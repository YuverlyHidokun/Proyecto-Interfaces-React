const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const loginBoton = document.querySelector("#loginButton");

const users = JSON.parse(localStorage.getItem('users')) || [
    { email: 'yuverly@gmail.com', password: '123456' },
    { email: 'dilan@gmail.com', password: '123456' },
];

signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

loginBoton.onclick = (event) => {
    Login();
};

function Login() {
    const emailInput = document.querySelector(".login input[type='text']");
    const passwordInput = document.querySelector(".login input[type='password']");
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html';
    } else {
        alert('Inicio de sesión fallido. Verifica tus credenciales.');
    }
}