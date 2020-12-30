const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()
const port = 3000

const route = require ('./routes')

//Template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

//Route init
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})