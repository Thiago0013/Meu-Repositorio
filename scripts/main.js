function contatos(){
    window.location.href = "contatos.html";
}
function retornar(){
    window.location.href = "index.html";
}
function entrar(elemento){
    var id = elemento.id;

    switch (id) {
        case "instagram":
            window.open("https://www.instagram.com/03thiagoh/", "_blank");
            break;
        case "github":
            window.open("https://github.com/thiago0013", "_blank");
            break;
        default:
            console.log("ID não reconhecido: " + id);
    }
}