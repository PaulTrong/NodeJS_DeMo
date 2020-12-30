const newsRouter = require('./news')
const contactRouter = require('./site')

function route(app) {

    app.use('/news', newsRouter)

    app.use('/contact', contactRouter)
  
    app.get('/', (req, res) => {
        res.render('home')
    })
}

module.exports = route