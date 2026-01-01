// Class is used to create object in dinamic way

class person {
    #name; #age; // #prop is used get private the property
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }
    introduce() {
        return `Hello there, my name is ${this.#name} and i am ${this.#age} years old.`
    }
    
    getName(){
        return this.#name
    } setName(value){
        this.#name = this.#name
    }

    getAge(){
        return this.#age
    } setAge(value){
        this.#age = this.#age
    }
}

const developer = new person('claudio', 16)
console.log(developer.introduce())

const neighbor = new person('Bento', 18)
console.log(neighbor.getName())
console.log(neighbor.getAge())