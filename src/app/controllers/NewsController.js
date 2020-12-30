
class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('tintuc')
    }

    //[GET] /news/detail
    detail(req, res) {
        res.send('Tin tức này chi tiết hơn nhé')
    }
}

module.exports = new NewsController