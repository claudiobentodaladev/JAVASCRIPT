// CLASS are dinamics object maker

/* It's a ready object
const vivo = {
    ram: 8,
    rom: 128,
    version: 11
}
*/

// It's a creater object
class computer{
    constructor(memory1,memory2,windows){
        this.ram = memory1;
        this.rom = memory2;
        this.version = windows;
        this.type = "VIVO BOOK"
    }
    cpu(){
        return `${this.type} CPU: AMD RYZEN 7`
    }
}

const vivo = new computer(8,128,10)

console.log(vivo,`${vivo.cpu()}`)