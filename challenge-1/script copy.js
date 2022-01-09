const checkdogs=function(dogsJulia,dogsKate){
   const dogsJuliaCorrected=dogsJulia.slice();
   dogsJuliaCorrected.spice(0,1);
   dogsJuliaCorrected.spice(-2)

   const dogs=dogsJuliaCorrected.concat(dogsKate);
   console.log(dogs);

   dogs.foreach(function(dog,i){
       if(dog >= 3){
           console.log(`dog number ${1+1} is an adult,and is ${dog} years old`)
       }
       else{
        console.log(`dog number ${1+1} is still a puppy🐶`)
    
       }
   })
};
checkdogs([3,5,2,12,7],[4,1,15,8,3]);