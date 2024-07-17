// class Rectangle{
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// const a = new Rectangle(1, 2)
// const b = new Rectangle(1, 2)
// console.log(a===b) // false

class Singleton{
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this
        }
        return Singleton.instance
    }
    getInstance() {
        return this
    }
}

const a = new Rectangle(1, 2)
const b = new Rectangle(1, 2)
console.log(a === b) // true