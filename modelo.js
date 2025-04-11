function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imgAtual")
    var data = new Date;
    var horaAtual = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${horaAtual}:${minutos} Hrs`
    if(minutos < 10){
        minutos = "0" + minutos
    }
    if(horaAtual > 0 && horaAtual < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = "rgb(156, 154, 131)"
    }else if (horaAtual >= 12 && horaAtual < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = "rgb(243, 223, 43)"
    }else{
        //boa noite
        img.src = "noite.png"
        document.body.style.background = "rgb(21, 25, 59)"
    }
}
