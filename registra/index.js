function processoRegistro(event) {
    event.preventDefault();

    
 document.getElementById("validaremail").textContent = "";
 document.getElementById("validarsenha").textContent = "";
 document.getElementById("validarnome").textContent = "";



    let nomeusuario = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    let confirmarsenha = document.getElementById("confirmar").value;
    
    if(nomeusuario.length < 3 || nomeusuario.length > 20 || nomeusuario.includes(" ") || nomeusuario.includes("@") || nomeusuario.includes("#") || nomeusuario.includes("$") || nomeusuario.includes("%") || nomeusuario.includes("&")) {
        document.getElementById("validarnome").textContent = "O nome de usuário deve ter entre 3 e 20 caracteres, sem espaços ou caracteres especiais!";
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        document.getElementById("validaremail").textContent = "Digite um email válido!";
        event.preventDefault();
        return;
    }

    if (senha.length < 6) {
        document.getElementById("validarsenha").textContent = "A senha deve ter pelo menos 6 caracteres!";
        event.preventDefault();
        return;
    }

    if (senha !== confirmarsenha) {
        document.getElementById("validarsenha").textContent = "As senhas não são iguais!";
        event.preventDefault();
        return;
    }
    window.location.href = "../painel-principal/painel.html";



}

