// CLASS are dinamics object maker.

class person {

    // constructor is a dinamic property maker.
    constructor(name,years_old) { //         <- parameters
        this.names = name
        this.years_olds = years_old //       <- property
    }

    // Method are function-ish in class.
    introduce(rud){
        try {
            if (rud == undefined) {
                throw new Error("Have not parameters in introduce function");
            } else {
                if (rud) {
                    return `i do not want to introduce myself`
                } else {
                    return `i am ${this.names} an i am ${this.years_olds} years old`
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

let me = new person('claudio', 16)

console.log(me.introduce(false))