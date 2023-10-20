const express=require('express');
const proRoute=express.Router();
const proModel=require('../models/proModel');

proRoute.post('/product',async(req,res)=>{
    try{
        const product=new proModel({
            name:req.body.name,
            price:req.body.price,
            desc:req.body.desc
        })

        //console.log(req.body.Firstname)

        product.save()
        .then(saved=>{
            console.log(saved);
            res.send(product);
            //res.redirect("dashboard");
        })
        .catch(Err=>{
            res.send(Err);
        })
    }catch(err){
        console.log("error in posting "+err);
    }
})

proRoute.get('/product',(req,res)=>{
    proModel.find({}).then((data)=>{
        res.status(200).send(data);
    }).catch((e)=>{
        res.status(401).send(e.message)
    })
})

proRoute.get('/product/:id',async(req,res)=>{
    try{
        const productID=req.params.id;
        const getProduct=await proModel.findById(productID);
        if(getProduct){
            res.json(getProduct);
        }else{
            return res.status(404).send({ message: 'Student not found' });
        }
    }catch(error){
        res.status(500).send({ message: 'Internal server error' });
    }
})

proRoute.put('/product/:id',async(req,res)=>{
    try{
        const productID=req.params.id;
        const name=req.body.name;
        const price=req.body.price;
        const desc=req.body.desc;

        const updatedProduct=await proModel.findByIdAndUpdate(productID,{name,price,desc},{new:true});
        if(updatedProduct){
            return res.json("Product Updated SuccessFully")
        }else{
            return res.status(404).send('No Data Found For Given Id')
        }
    }catch(error){
        console.error(error);
        res.status(500).send('Something went wrong')
    }
})

proRoute.delete('/product/:id',async(req,res)=>{
    try{
        const productID=req.params.id;
        const deleteProduct=await proModel.findByIdAndRemove(productID);
        if(!deleteProduct){
            return res.status(404).send({ message: 'product not found' });
        }else{
            res.status(200).send({ message: 'product deleted successfully' });
        }
    }catch(error){
        res.status(500).send({ message: 'Internal server error' });
    }
})

module.exports=proRoute;