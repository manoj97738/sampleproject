const port = 3000
function init(app) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

module.exports = init;