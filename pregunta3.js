// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    if(nums.length<3)  
    return undefined;
    
    nums=nums.sort()
    
    let index=nums.length-3;
    let i=nums.length-1;
    let iguales=2;

    while(iguales>0 && i>0 && index>=0){
        if(nums[i]==nums[i-1]){
            index--
        } else {
            iguales--
        }       
        i--
    }

    return nums[index]

}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);