// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
    name: 'bday party',
    guestList: ['ju', 'de', 'br'],
    printGuestList() {
        console.log('guest list for: ' + this.name.toUpperCase())
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        });
    }
}

event.printGuestList()