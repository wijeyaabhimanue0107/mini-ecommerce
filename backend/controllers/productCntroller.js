exports.getProducts = (req, res, next) => {
    res.json({
        success: true,
        message: 'Get Products Working!'
    });
}
exports.getSingleProducts = (req, res, next) => {
    res.json({
        success: true,
        message: 'Get Single Products Working!'
    });
}