module.exports={
    edit: (req,res)=>{
        return res.render('edit')
    },
    create: (req,res)=>{
        return res.render('crear')
    },
    listar: (req,res)=>{
        return res.render('listar')
    }
}