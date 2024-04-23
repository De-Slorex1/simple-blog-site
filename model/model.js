const fs = require('fs');

const path = require('path');

const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProdFromFile = (cb) => {
    fs.readFile(filePath, (err, data) => {
        if(err) {
            cb([])
        }else {
            cb(JSON.parse(data))
        }
    })
}

module.exports = class Product {
    constructor(title, imageURL, price, desc) {
        this.title = title
        this.imageURL = imageURL
        this.price = price
        this.desc = desc
    }

    save() {
        getProdFromFile(product => {
            product.push(this)
            fs.writeFile(filePath, JSON.stringify(product), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll (cb) {
        getProdFromFile(cb)
    }
} 