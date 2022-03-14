//selezionare i campi del dom

let nomeCognome = document.getElementById("name");
console.log(nomeCognome);

let km = document.getElementById("kilometri");
console.log(kilometri);

let fasciaEta = document.getElementById("eta");
console.log(fasciaEta);

let bottoneGenera = document.getElementById ("btngenera");
console.log(bottoneGenera);

let tabellaDati = document.getElementById("tabella");

let nomePasseggero = document.getElementById ("nometabPasseggero");

let sconto = document.getElementById("scontoTabella");

let prezzoBiglietto = document.getElementById("prezzoTabella");

let carrozzaRandom = Math.floor(Math.random() * 9) +1;

let numeroRandom = Math.floor(Math.random() * 99999);

let codiceCP = document.getElementById("codice")

let carrozza = document.getElementById("numCarrozza");

addEventListener("dblclick",
    function() {
        //recuperare dati input
       console.log(nomeCognome.value, km.value, fasciaEta.value)

       //stampare dati nella tabella
        //selezionare l'elemento dove scrivere valore ottenuto
        //scrivi dentro html selezionato con innerHTML
        //seleziona valore corretto
        nomePasseggero.innerHTML = nomeCognome.value;
        
        if (fasciaEta.value == "meno-di-18") {
            sconto.innerHTML = `-20%`;
            prezzoBiglietto.innerHTML = `${ (km.value * 0.21) * 0.80 } €`
          } else if (fasciaEta.value == "tra-18-65") {
            sconto.innerHTML = `Prezzo intero`;
            prezzoBiglietto.innerHTML = `${km.value * 0.21} €`
          } else {
            sconto.innerHTML = `-40%`;
            prezzoBiglietto.innerHTML = `${ (km.value * 0.21) * 0.60 } €`
        }

        codiceCP.innerHTML = numeroRandom;
        carrozza.innerHTML = carrozzaRandom;


       //mostrare/nascondere tabella
       tabellaDati.classList.remove("d-none");

    }
)