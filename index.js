/* <span id="temp" class="fa"></span> */
const chargingBattery = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf244';

    setTimeout(() => {
        temp.innerHTML = '&#xf243';
        temp.style.color = '#f8b627';
    },1000);

    setTimeout(() => {
        temp.innerHTML = '&#xf242';
    },2000);

    setTimeout(() => {
        temp.innerHTML = '&#xf241';
    },3000);

    setTimeout(() => {
        temp.innerHTML = '&#xf240';
        temp.style.color = '#d63031';
    },4000);

}

chargingBattery();

setInterval(chargingBattery,5000);