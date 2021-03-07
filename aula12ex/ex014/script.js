function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

// Adicionar 0 caso a hora for menor que 10
if (hora < 10) {
    hora = "0" + hora;

     // Adicionar 0 caso a minutos for menor que 10
} if (minutos < 10) {
    minutos = "0" + minutos;
}
msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src='Manhã.png'
    document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    img.src='Tarde.png'
    document.body.style.background = "#b9846f"
    } else {
    //Boa Noite!
    img.src='Noite.png'
    document.body.style.background = "#515154"
    }
}