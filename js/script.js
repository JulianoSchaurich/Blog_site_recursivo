//VALIDACAO FORM
function validar_form(){
  if( document.form.name.value == ""){
    alert( "Forneça seu nome por favor!" );
    document.myForm.name.focus() ;
    return false;
  }
  if( document.form.email.value == ""){
    alert( "Forneça seu email por favor!" );
    document.myForm.email.focus() ;
    return false;
  }
  if( document.form.text.value == ""){
    alert( "Forneça sua menssagem por favor!" );
    document.myForm.text.focus() ;
    return false;
  }
  return true;
}

//TROCAR TEMA
const css = document.getElementById("css");
const theme = window.localStorage.getItem("theme");
const img = document.getElementById("img-botao");
const p = document.getElementById("p-theme");

const css_secoes = document.getElementById("css-secoes");
const img_secoes = document.getElementById("img-botao-secoes");

function verificar_tema(){
  if (theme === "dark"){
    css.href = "css/style2.css";
    img.src = "imagens/img-sol.png";
    p.innerHTML = "l";
  }else{
    css.href = "css/style.css";
    img.src = "imagens/img-lua.png";
    p.innerHTML = "d";
  }
}

function verificar_tema_secoes(){
  if (theme === "dark"){
    css_secoes.href = "../css/style2.css";
    img_secoes.src = "../imagens/img-sol.png";
    p.innerHTML = "l";
  }else{
    css_secoes.href = "../css/style.css";
    img_secoes.src = "../imagens/img-lua.png"
    p.innerHTML = "d";
  }
}

function changeColor(){
  if(p.innerHTML === "l"){
    window.localStorage.setItem("theme", "light");
    img.src = "imagens/img-lua.png";
    css.href = "css/style.css";
    p.innerHTML = "d";
  }else{
    window.localStorage.setItem("theme", "dark");
    img.src = "imagens/img-sol.png";
    css.href = "css/style2.css";
    p.innerHTML = "l";
  }
}

function changeColorSecoes(){
  if(p.innerHTML === "l"){
    window.localStorage.setItem("theme", "light");
    img_secoes.src = "../imagens/img-lua.png";
    css_secoes.href = "../css/style.css";
    p.innerHTML = "d";
  }else{
    window.localStorage.setItem("theme", "dark");
    img_secoes.src = "../imagens/img-sol.png";
    css_secoes.href = "../css/style2.css";
    p.innerHTML = "l";
  }
}

//NAV HAMBURGUER
function nav() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}