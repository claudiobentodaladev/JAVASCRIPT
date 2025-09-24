// Class is used to create object in dinamic way

class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce(){
        return `Hello there, my name is ${this.name} and i am ${this.age} years old.`
    }
}

const developer = new person('claudio', 16)
console.log(developer.introduce())

const neighbor = new person('Bento', 18)
console.log(neighbor.name)
console.log(neighbor.age)


