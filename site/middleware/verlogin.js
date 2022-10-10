module.exports=(req,res,next)=>{
    
    if ( req.session.sessionuser==null) {
        return res.redirect('/')
    }else{
      next()  
    }
    
    
    
}