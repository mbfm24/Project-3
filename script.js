function inches2cent(valNum) {
    $.getJSON('http://statenweb.mockable.io/conversions/', function(data) {
    

    document.getElementById("outputcm").innerHTML=valNum/`${data.inchesInCm}`;
})
}
function cent2inch(valNum) {
    $.getJSON('http://statenweb.mockable.io/conversions/', function(data) {
    

    document.getElementById("outputin").innerHTML=valNum*`${data.inchesInCm}`;
})
}