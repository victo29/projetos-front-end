const horas = document.getElementById("horas"); /*Seleciona um elemento com base no ID*/ 
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");


const relogio = setInterval(function time(){
    let dateToday = new Date(); /*Seleciona a data do dia atual*/
    let hr = dateToday.getHours(); /*Pega a variável que contém a data e utiliza o métodos para pegar somente as hora */
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    hora_menor_que_dez = hr < 10;
    minuto_menor_que_dez = min < 10;
    segundo_menor_que_dez = sec < 10;

    if(hora_menor_que_dez) hr = "0"+hr;

    if(segundo_menor_que_dez) sec = "0" + sec

    if(minuto_menor_que_dez) min = "0" + min

    horas.textContent = hr; /*Altera o conteúdo da variável horas que é o elemento com id horas para o conteúdo da variavel hr*/
    minutos.textContent =min;
    segundos.textContent = sec;
})