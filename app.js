const valkommen = (namn,titel="medlem") => {
    return  `välkommen ${namn} ${titel}`;
       
}
console.log(valkommen("klara","admin"))
console.log (valkommen("leo"))




const spelare = (namn,roll="nybörjare") => {
return `välkommen ${namn} ${roll}`
}
console.log (spelare("alex","admin"))
console.log(spelare("leo"))







const provPoang = [18, 22, 15, 28, 20];

const rakenaMedel = (poangLista) => {
  let summa = 0;
  for (const p of poangLista) {
    summa += p;
  }
  return summa / poangLista.length;
};

const medel = rakenaMedel(provPoang);
console.log(`Medelpoäng på provet: ${medel}`);




const farger =["röd","blå","grön"];
const samalfarger = (farglista) => {
    let resultat=""
    for(f of farglista)
        resultat += f+" ";
    return resultat
}
const svar= samalfarger(farger)
console.log(svar)








































const frukter = ["äpple","banan", "päron"]
const visafrukt = (frukt) => {
let resultat = "";
for (f of frukt){
    resultat += f;
}
return resultat;
}
const visa = visafrukt(frukter)
console.log(visa)








