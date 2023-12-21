let retornoUser = [...document.querySelectorAll("ul>li")]
let inputSenha = document.querySelector("input")
console.log(retornoUser)

inputSenha.addEventListener('input', (valorSenha)=>{
    let senha = valorSenha.target.value
    if(senha.length > 8){
        retornoUser[0].classList.add("ok")
    } else{
        retornoUser[0].classList.remove("ok")
    }

    if(/[A-Z]/.test(senha)){
        retornoUser[1].classList.add("ok")
    } else{
        retornoUser[1].classList.remove("ok")
    }

    if(/[a-z]/.test(senha)){
        retornoUser[2].classList.add("ok")
    } else{
        retornoUser[2].classList.remove("ok")
    }

    if(/[0-9]/.test(senha)){
        retornoUser[3].classList.add("ok")
    } else{
        retornoUser[3].classList.remove("ok")
    }

    if(/[$&+,:;=?@#|'<>.^*()%!-]/.test(senha)){
        retornoUser[4].classList.add("ok")
    } else{
        retornoUser[4].classList.remove("ok")
    }
    
})

function confirmar(){
    retornoUser = retornoUser.filter((li)=>{
        li.classList.contains("ok")
    })

    if(retornoUser<5){
        alert("A senha não cumpre os requisitos de segurança")
    } else {
        alert("Senha cumpre todos os recursos de segurança")
    }
}
