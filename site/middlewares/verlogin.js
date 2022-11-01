module.exports=(req,res,next)=>{
    
    if ( req.session.userLogin==null) {
        return res.redirect('/login')
    }else{
      next()  
    }
    
    
    
}