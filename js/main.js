//chiedo all'utente età e quanti km vuole viaggiare
const userAge = parseInt(prompt("Inserisci la tua età"));
const userTravel = parseFloat(prompt("Inserisci la lunghezza del tuo viaggio (km)"));

if ((userAge<0 || userTravel<0) || (isNaN(userAge) == true || isNaN(userTravel) == true)){
    //is that spaghetti code like?
    document.getElementById("result").innerHTML = `Qualcosa è andato storto, ricaricare la pagina`;
    console.log(userAge , userTravel)
} else {
    //calcolo il prezzo del viaggio
    let normalPrice = (userTravel * 0.21).toFixed(2);
    console.log(normalPrice);

    //dichiaro la variabile del prezzo scontato e risultato
    let discountPrice;
    let result;

    //stabilisco i casi di sconto
    if (userAge < 18){
        //nel caso di minorenni viene applicato un 20% di sconto
        //console.log("Hai diritto ad uno sconto del 20%")
        document.getElementById("discount").innerHTML = "Hai diritto ad uno sconto del 20%";
        discountPrice= ((normalPrice * 20) / 100).toFixed(2);
        result= (normalPrice - discountPrice).toFixed(2);
        document.getElementById("result").innerHTML = `Il prezzo del tuo biglietto è ${result}€ già scontato. Il tuo sconto è di ${discountPrice}€.`;
        //console.log(`Il prezzo del tuo biglietto è ${result}€ già scontato. Il tuo sconto è di ${discountPrice}€.`);
    } else if (userAge >= 65){
        //nel caso di maggiori di 65 anni viene applicato un 40% di sconto
        //console.log("Hai diritto ad uno sconto del 40%");
        document.getElementById("discount").innerHTML = "Hai diritto ad uno sconto del 40%";
        discountPrice = ((normalPrice * 40) / 100).toFixed(2);
        result = (normalPrice - discountPrice).toFixed(2);
        document.getElementById("result").innerHTML = `Il prezzo del tuo biglietto è ${result}€ già scontato. Il tuo sconto è di ${discountPrice}€.`;
        //console.log(`Il prezzo del tuo biglietto è ${result}€ già scontato. Il tuo sconto è di ${discountPrice}€.`);
    } else {
        //altrimenti non viene applicato sconto e mostrato il prezzo di base
        document.getElementById("result").innerHTML = `Il prezzo del tuo biglietto è ${normalPrice}€.`;
        //console.log(`Il prezzo del tuo biglietto è ${normalPrice}€.`);
    }
}



