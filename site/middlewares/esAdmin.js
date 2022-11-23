module.exports=(req,res,next)=>{
    if (req.session.sessionuser) {
        if (req.session.sessionuser.rol=== 2 || req.session.sessionuser.rol==="superadmin"  ) {
            next() 
             
         }else{return res.redirect('/')}
    } else{
        return res.redirect ('/login')
    }
   
        
    
}