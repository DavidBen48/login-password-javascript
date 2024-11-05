// DOM geral
document.addEventListener("DOMContentLoaded", () => {
    // index.html => copyright
    const copyrightDavidBen = document.getElementsByClassName('copyright')[0];
    copyrightDavidBen.innerText = `Copyright | David Ben | 2024`;

    // cadastro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const fullName = document.getElementById('name-username').value;
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;

            if (localStorage.getItem(username)) {
                document.getElementById('register-message').innerText = 'Usuário já cadastrado.';
            } else {
                localStorage.setItem(username, JSON.stringify({ fullName, password }));
                document.getElementById('register-message').innerText = 'Usuário cadastrado com sucesso!';
                registerForm.reset();
            }
        });
    }

    // login do user
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            const userData = JSON.parse(localStorage.getItem(username));

            if (userData && userData.password === password) {
                localStorage.setItem('currentUser', username);
                window.location.href = 'welcome.html';
            } else {
                document.getElementById('login-message').innerText = 'Usuário ou senha incorretos.';
            }
        });
    }

    // ida para o welcome.html
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        const currentUser = localStorage.getItem('currentUser');
        const userData = JSON.parse(localStorage.getItem(currentUser));

        if (userData) {
            welcomeMessage.innerText = `Olá, ${userData.fullName}!`;
        }
    }
});