let amigo = {
    nome:"Jose",
    sexo:"M",
    peso:75,
    engordar(p=0){
        console.log("Engordou")
        this.peso +=p
    }
}

amigo.engordar(12)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)