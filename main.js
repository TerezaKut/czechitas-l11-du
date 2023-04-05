
// ČAS
let hodiny = 0;
let minuty = 0;

while (hodiny < 24){
     console.log(String(hodiny)+':'+ String(minuty).padStart(2,'0'));
     minuty++;
     if (minuty === 60){         
         hodiny++;
         minuty=0;
     }    
 }

// ČEKÁNÍ NA ŠESTKU
function roll() {
    let hod = Math.floor((Math.random()*6)+1);
    let pokus = 1;
    while (hod != 6){
        console.log(hod);
        hod = Math.floor((Math.random()*6)+1);
        pokus++;
    }
    console.log('Šestka padla na ' + pokus + '.pokus')
}

roll();

// MALÉ ALGORITMY
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]

//  Vypište na výstup všechna čísla.
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
//   Vypište na výstup druhé mocniny všech čísel.
for (let i=0; i<numbers.length; i++){
    let mocnina = numbers[i]*numbers[i];
    console.log(mocnina);
}
//   Vypište na výstup pouze záporná čísla.
for (let i=0; i<numbers.length; i++){
    if (numbers[i] < 0){
        console.log(numbers[i]);
    }
}
//   Vypište na výstup absolutní hodnotu všech čísel.
for (let i=0; i<numbers.length; i++){
    let cislo = numbers[i];
    if (cislo < 0){
        cislo = cislo * -1;
    }
    console.log(cislo);
}
//   Vypište na výstup pouze sudá čísla.
for (let i=0; i<numbers.length; i++){
    let cislo = numbers[i];
    if (cislo%2 === 0){
        console.log(cislo);
    }
}
//   Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
for (let i=0; i<numbers.length; i++){
    let cislo = numbers[i];
    if (cislo < 0){
        cislo = cislo * -1;
    }
    if (cislo %3 === 0){
        console.log(numbers[i]);
    }
}
//   Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
let petka = numbers.indexOf(5);
for (let i=0; i<numbers.length; i++){
    let vzdalenost = petka - i;
    if (vzdalenost < 0){
        vzdalenost = vzdalenost * -1;
    }
    console.log('Cislo ' + numbers[i] + ' je vzdáleno od 5 o: ' + vzdalenost)
}
//   Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
for (let i=0; i<numbers.length; i++){
    let vzdalenost = petka - i;
    vzdalenost = vzdalenost * vzdalenost;
    console.log('Druhé mocniny vzdálenosti čísla ' + numbers[i] + ' od 5: ' + vzdalenost)
}
//   Spočítejte, kolik je v seznamu záporných čísel.
let sumZaporna = 0;
for (let i=0; i<numbers.length; i++){
    if (numbers[i] < 0){
        sumZaporna++;
    }
}
console.log('Počet záporných čísel: ' + sumZaporna );
//   Spočítejte součet všech čísel v poli.
let soucet = 0;
for (let i=0; i<numbers.length; i++){
        soucet+=numbers[i];
}
console.log('Součet všech čísel: ' + soucet );
//   Spočítejte průměr všech čísel v poli.
let prumer = soucet / numbers.length;
console.log('Průměr všech čísel v poli: ' + prumer );
//   Spočítejte součet všech kladných čísel v poli.
let soucetKladna = 0;
for (let i=0; i<numbers.length; i++){
    if (numbers[i] > 0){
        soucetKladna += numbers[i];
    }
}
console.log('Součet všech kladných čísel: ' + soucetKladna);
