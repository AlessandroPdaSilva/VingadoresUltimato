
/*  
-- dica -- 

- Esse JavaScript muda a pagina para darkmode e lightmode

*/

switch0 = document.getElementById('switch')
switchL = document.getElementById('switchL')
// click no botao
function clicado(){
    
    if(switch0.checked == 1){
        switchL.innerText = 'Light'
        darkmode()

    }else{
        switchL.innerText = 'Dark'
        lightmode()
    }
}
// tema escuro
function darkmode(){
    
    /* conteudo */
    document.body.style.background = "var(--body-darkmode)"
    document.querySelector('div.conteudo').style.background = "var(--bg-darkmode)"

    /* texto */
    document.querySelector('h1').style.color = "var(--text-darkmode)";
    document.querySelector('p').style.color = "var(--text-darkmode)";
    respDiretores.style.color = "var(--text-darkmode)"

    /* barras */
    document.querySelector('header').style.background = "var(--barra-darkmode)";
    document.querySelector('footer').style.background = "var(--barra-darkmode)";

    /* botao toggle */
    document.querySelector('label').style.background = "var(--botao-darkmode)"
    document.querySelector('label').style.transition = "0.5s"
    
    document.querySelector('body').style.transition = "1s"
    document.querySelector('.conteudo').style.transition = "1s"
}
// tema claro
function lightmode(){
    

    /* conteudo */
    document.body.style.background = "var(--body-whitemode)"
    document.querySelector('div.conteudo').style.background = "var(--bg-whitemode)"

    /* texto */
    document.querySelector('h1').style.color = "var(--text-whitemode)";
    document.querySelector('p').style.color = "var(--text-whitemode)";
    respDiretores.style.color = "var(--text-whitemode)"

    /* barras */
    document.querySelector('header').style.background = "var(--barra-whitemode)";
    document.querySelector('footer').style.background = "var(--barra-whitemode)";

    /* botao toggle */
    document.querySelector('label').style.background = "var(--botao-whitemode)"
    document.querySelector('label').style.transition = "0.5s"
    
    document.querySelector('body').style.transition = "1s"
    document.querySelector('.conteudo').style.transition = "1s"
}





//var
let check = document.getElementById('idDiretor')
let respDiretores = document.getElementById('respDiretores')
let arr = ["Joe Russo", "Anthony Russo"]

// 
function clicadoDiretores(){
    if(idDiretor.checked == 1){
        DiretoresOn()
    }else{
        DiretoresOff()
    }
}

function DiretoresOn(){
    
    for(let i = 0;i<arr.length;i++){
        respDiretores.innerHTML += "- "+arr[i]+"<br> "
    }
    
}
    
function DiretoresOff(){
    respDiretores.innerHTML = ""
}

