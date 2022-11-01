module.exports = (req,res,next) => {
    if (req.cookies.helloCookie) {
        req.session.sessionuser = req.cookies.helloCookie
    }
    next()
}