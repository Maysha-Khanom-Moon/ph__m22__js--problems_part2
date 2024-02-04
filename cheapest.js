const mobiles = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 10000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' }
]

function getCheapest(phones) {
    let phone = phones[0];

    for (const i of phones) {
        if(phone.price > i.price) {
            phone = i;
        }
    }
    return phone;
}

console.log(getCheapest(mobiles));