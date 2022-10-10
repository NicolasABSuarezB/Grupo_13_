module.exports=(req,res,next)=>{
    if (req.session.sessionuser) {
        res.locals.usurlologin=req.session.sessionuser
        
    }
    next()
}