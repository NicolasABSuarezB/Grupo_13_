module.exports=(req,res,next)=>{
    if (req.session.userLogin ) {
        res.locals.usurlologin=req.session.userLogin
        
    }
    next()
}