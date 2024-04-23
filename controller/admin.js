const Product = require('../model/model');

exports.postProds = (req, res, next) => {
    res.redirect('/product')
}

exports.getProduct = (req, res, next) => {
    res.render('admin/product', {pageTitle: "Product", path: '/product'})  
}

exports.postProduct = (req, res, next) => {
    const title = req.body.title
    const imageURL = req.body.imageURL
    const price = req.body.price
    const desc = req.body.desc

    const products = new Product(title, imageURL, price, desc);
    products.save()
    res.redirect('/sales');
}

exports.getAdminProds = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product', {prods: products, pageTitle: "Product", path: '/product'})
    })
};

exports.getAdminProductPage = (req, res, next) => {
    res.render('admin/admin-add-product', {pageTitle: 'Admin', path: '/admin-add-product'})
};

