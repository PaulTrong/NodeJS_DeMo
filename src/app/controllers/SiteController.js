
class SiteController {

    //[GET] /news
    contact(req, res) {
        res.render('contact')
    }
}

module.exports = new SiteController