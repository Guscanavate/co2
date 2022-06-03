let value = document.getElementsByClassName ("form-select");

console.log (value);

let kms = document.getElementsByClassName ("input-group-text");
console.log (kms);


let ToyotaRAV4 = ['2.5 2e','n',6.30];
let CitroënCElysee = ['1.6 HDi TD','d',6.35];
let FordMondeo = ['2.5+e','n',6.80];
let ChevroletOnix12 = ['1.2','n',7.00];
let VWUp = ['1.0','n',7.05];
let CitroënC4Lounge = ['1.6 HDi','d',7.30];
let FiatMobi = ['1.0','n',7.50];
let DS7Crossback = ['1.6 HDi','d',7.55];

if (value = 1) tc = ToyotaRAV4 [1];
else if (value = 2) tc = CitroënCElysee [1];
else if (value = 3) tc = FordMondeo [1];
else if (value = 4) tc = ChevroletOnix [1];
else if (value = 5) tc = VWUp [1];
else if (value = 6) tc = CitroënC4Lounge [1];
else if (value = 7) tc = FIATMobi [1];
else if (value = 8) tc = DS7Crossback [1];
else (alert= 'Debe seleccionar un vehículo de las lista');

if (value = 1) cpm = ToyotaRAV4 [2];
else if (value = 2) cpm = CitroënCElysee [2];
else if (value = 3) cpm = FordMondeo [2];
else if (value = 4) cpm = ChevroletOnix [2];
else if (value = 5) cpm = VWUp [2];
else if (value = 6) cpm = CitroënC4Lounge [2];
else if (value = 7) cpm = FIATMobi [2];
else if (value = 8) cpm = DS7Crossback [2];
else (alert= 'Debe seleccionar un vehículo de las lista');


const nafta = 2.38 ;
// Emisiones en Kg de CO2 por litro de nafta consumido
const gasoil = 2.61 ;
// Emisiones en Kg de CO2 por litro de gasoil consumido

let consumo = (cpm*kms)/100;

if ( tc == 1 ) { alert ('Las emisiones del período son de : ' + consumo*nafta)} 
else { alert ('Las emisiones del período son de : '+ consumo*gasoil)};

let combus = document.createElementById ("combus");
combus.innerHTML = <h2>cpm</h2>;