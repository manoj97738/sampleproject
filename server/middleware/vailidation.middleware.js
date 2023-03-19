module.exports.middleware1 = (req, res, next) => {
    console.log("middleware1 ware called")
    next();
}


module.exports.middleware2 = (req, res, next) => {
    console.log("middleware2 ware called")
    next();
}