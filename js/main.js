const btnLogin = document.querySelector(".login-btn");
const btnReset = document.querySelector(".reset-btn");
const userNameInputElement = document.querySelector("[name='username']");
const travelInputElement = document.querySelector("[name='travel']");
const userAgeInputElement = document.querySelector("[name='userage']");


btnLogin.addEventListener("click", function () {



    const userName = userNameInputElement.value;
    const travel = travelInputElement.value;
    const userAge = userAgeInputElement.value;
    const priceForKm = 0.21;
    const price = travel * priceForKm;
    const priceYoung = (price - (price * 0.2)).toFixed(2);
    const priceOld = (price - (price * 0.4)).toFixed(2);

    

    if (isNaN(userAge) || travel === "" || travel <= 0 || userName === "") {
        alert("Completa i campi selezionati");
    } else {

        let supply = "Biglietto Standard";

        document.getElementById("username").innerHTML = `${userName}`
        document.getElementById("supply").innerHTML = `${supply}`;
        document.getElementById("vagon").innerHTML = `${Math.floor(Math.random() * 21) + 1}`;
        document.getElementById("codCP").innerHTML = `${Math.floor(Math.random() * 100000) + 1}`;
        document.getElementById("price").innerHTML = `${price}`;


        if (userAge == 1) {

            document.getElementById("supply").innerHTML = `Biglietto per Minorenni`;
            document.getElementById("price").innerHTML = `${priceYoung}`;


        } else if (userAge == 2) {
            document.getElementById("supply").innerHTML = `Biglietto per Anziani`;
            document.getElementById("price").innerHTML = `${priceOld}`;
        }
    }


})

btnReset.addEventListener("click", function () {

    location.reload();

})

















// const date = new Date();
// const currentDay = date.getDate();
// const currentMonth = date.getUTCMonth() + 1;
// const currentYear = date.getFullYear();
// const currentDate =  ${currentDay}/${currentMonth}/${currentYear}