let valores = [1,2,3,4,5,6,7,8,9]

for(pos= 0; pos<valores.length; pos++){
    console.log(valores[pos])
}

for(let pos in valores){
    console.log(valores[pos])
}
console.log('-----------------------')
console.log(valores.indexOf(3))