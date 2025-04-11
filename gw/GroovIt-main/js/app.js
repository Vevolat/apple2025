let msg = document.getElementById('day');
let agora = new Date();
let horas = agora.getHours();


if (horas >= 0 && horas <= 12) {
    //BOM DIA
    msg.innerHTML = "早上好"

}else if (horas > 12 && horas < 18) {
    //BOA TARDE
    msg.innerHTML = "中午好"

}else {
    //BOA TARDE
    msg.innerHTML = "晚上好"
}


