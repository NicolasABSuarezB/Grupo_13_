module.exports=(req,res,next)=>{
    if (req.session.userLogin.rol==="administrador" || req.session.userLogin.rol==="superadmin"  ) {
       next() 
        
    }else{return res.redirect('/')}
        
    
}