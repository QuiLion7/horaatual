let dados = document.querySelector('#horaCerta');
let photo = document.querySelector('#photo');
let dataMostrar = document.querySelector('#dataAtual');

//Chamar a função relógio
intervalo()
// A cada 1 segundo, chamar a função carregar
function intervalo () {
    setInterval(carregar, 1000);
}
carregar()

function carregar() {
    let data = new Date();
    let hora = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    let segundos = String(data.getSeconds()).padStart(2, '0');
    let ano = data.getFullYear();
    let mes = data.getMonth();
    let dia = String(data.getDate()).padStart(2, '0');
    let diaSemana = data.getDay();

    dados.innerHTML = `${hora}:${minutos}:${segundos}`;

    switch(diaSemana){
        case 0: diaSemana = 'Domingo'; break;
        case 1: diaSemana = 'Segunda'; break;
        case 2: diaSemana = 'Terça'; break;
        case 3: diaSemana = 'Quarta'; break;
        case 4: diaSemana = 'Quinta'; break;
        case 5: diaSemana = 'Sexta'; break;
        case 6: diaSemana = 'Sábado'; break;
    }
    switch(mes){
        case 0: mes = 'Janeiro'; break;
        case 1: mes = 'Fevereiro'; break;
        case 2: mes = 'Março'; break;
        case 3: mes = 'Abril'; break;
        case 4: mes = 'Maio'; break;
        case 5: mes = 'Junho'; break;
        case 6: mes = 'Julho'; break;
        case 7: mes = 'Agosto'; break;
        case 8: mes = 'Setembro'; break;
        case 9: mes = 'Outubro'; break;
        case 10: mes = 'Novembro'; break;
        case 11: mes = 'Dezembro'; break;
    }

    dataMostrar.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    if(hora >= 5 && hora < 12) {
        //Bom Dia
        photo.style.backgroundImage = 'url(assets/images/manha.jpg)';
        document.body.style.background = '#d4ad8f';
    }else if(hora >= 12 && hora <18) {
        //Boa tarde
        photo.style.backgroundImage = 'url(assets/images/tarde.jpg)';
        document.body.style.background = '#6a4055';
    }else if(hora >= 18 && hora <=23) {
        //Boa Noite
        photo.style.backgroundImage = 'url(assets/images/noite.jpg)';
        document.body.style.background = '#9679b2';
    }else if(hora >= 0 && hora <5) {
        //Boa Madrugada
        photo.style.backgroundImage = 'url(assets/images/madrugada.jpg)';
        document.body.style.background = '#191b1b';
    }
}

