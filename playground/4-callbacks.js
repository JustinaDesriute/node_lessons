import { NONAME } from "dns";

setTimeout(() => {
    console.log('2 sec');
},2000)

const names = ['andreewwww', 'fd', 'r4rr']
constshortNames = names.filter((name) =>  {
    return name.length <= 4
})

const geocode  = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

const data = geocode('Philadelphia')
console.log(data)