
const en = 2.38 ;
// Emisiones en Kg de CO2 por litro de nafta consumido
const ed = 2.61 ;
// Emisiones en Kg de CO2 por litro de gasoil consumido

let cpm = prompt ('Ingrese el consumo promedio indicado por el fabricante');

let cpr = cpm/10;
// cpr es consumo en ralentí, que es igual al 10% del consumo promedio

let km = prompt ('Ingrese los kms recorridos en el período');

let rl = prompt ('Ingrese el tiempo en ralentí del período');

let cmov = ( cpm * km) / 100;
// cmov es el consumo en movimiento en litros

let cral = (cpr + rl)
// cral es el consumo en ralentí en litros

let ct = cpr + cpm;

let tc = prompt ('Ingrese tipo de combustible - 1-Nafta o 2-Diesel');

if ((tc != 1) &&  (tc != 2)) { alert ('Por favor ingrese 1 para Nafta o 2 para Diesel')};

if ( tc == 1 ) { alert ('Las emisiones del período son de : ' + ct*en)} 
else { alert ('Las emisiones del período son de : '+ ct*ed )};

