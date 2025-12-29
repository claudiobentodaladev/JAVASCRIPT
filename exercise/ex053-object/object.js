let friend = {
    name: `claudio`,
    sex:`M`,
    peso: 1.67,
    fat(p = 0){
        this.peso += p
    }
}
friend.fat(2)
friend.name = 'bento'
console.log(`${friend.name} pesa ${friend.peso}kg`)