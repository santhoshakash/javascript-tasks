// const scoreDolphins=(96+108+89)/3;
// const scoreKoalas=(88+91+110)/3;
// console.log(scoreDolphins,scoreKoalas);

// if(scoreDolphins > scoreKoalas){
//     console.log('Dolphins win the Trophy');
// }
// else if(scoreKoalas > scoreDolphins)
// {
//     console.log("Kolas win the Trophy");
// }
// else if(scoreDolphins == scoreKoalas){
//     console.log("Both win the trophy");
// }

const scoreDolphins=(97+112+80)/3;
const scoreKoalas=(109+95+50)/3;
console.log(scoreDolphins,scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the Trophy');
}
else if(scoreKoalas > scoreDolphins && scoreDolphins >= 100)
{
    console.log("Kolas win the Trophy");
}
else if(scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy");
}
else{
    console.log("No one wins the trophy")
}