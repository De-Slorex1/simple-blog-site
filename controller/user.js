const Product = require('../model/model');

exports.getHomePage = (req, res, next) => {
    res.render('user/home', {pageTitle: "home", path: '/'})
    //res.sendFile(path.join(__dirname, '../views', 'home.html'));
};

exports.getSales = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('user/sales', {prods: products, pageTitle: "Sales", path: '/sales'})
    })
};

exports.getContact = (req, res, next) => {
    res.render('user/contact', {pageTitle: "Contact us", path: '/contact'})
};

/*exports.addProducts = (req, res, next) => {
    res.redirect('/sales')
};
*/

exports.getAddProductPage = (req, res, next) => {
    res.redirect('admin/product')
}

exports.getCart = (req, res, next) => {
    res.render('user/cart', {pageTitle: "Cart", path: '/cart'})
}

exports.getOrder = (req, res, next) => {
    res.render('user/orders', {pageTitle: "Your Order", path: '/orders'})
}

exports.getAdminPage = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/admin-add-product', {prods: products, pageTitle: "Admin", path: '/admin-add-product'})
    })
}
