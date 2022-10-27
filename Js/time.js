function startTime(){
    today=new Date();
    h=today.getHours();
    m=today.getMinutes(); 
    s=today.getSeconds(); 
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById("reloj").innerHTML=h+":"+m+":"+s;
    t=setTimeout("startTime()",500);}
    function checkTime(i)
    {if (i<12) {i="0" + i;}return i;}
    window.onload=function(){startTime();}
    // Creamos array con los meses del año
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días del año
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const fecha = new Date();
// Construimos el formato de salida esta escrito en html
