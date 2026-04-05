function processoRegistro(){

    let nomeusuario:string = String(prompt("Digite seu nome de usuário:"));

    let email:string;
    do{
        email = String(prompt("Digite seu email:"));

        if(!email.includes("@")){
            alert("Digite um email válido!");
        }

    }while(!email.includes("@"));

    let senha:string;
    let confirmarsenha:string;

    do{

        senha = String(prompt("Digite sua senha:"));
        confirmarsenha = String(prompt("Confirme sua senha:"));

        if(senha.length < 6){
            alert("A senha deve ter pelo menos 6 caracteres!");
        }

        if(senha !== confirmarsenha){
            alert("As senhas não são iguais!");
        }

    }while(senha !== confirmarsenha || senha.length < 6);

    alert("Registro bem-sucedido! Bem-vindo, " + nomeusuario + "!");
}
