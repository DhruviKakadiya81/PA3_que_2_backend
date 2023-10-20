const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/internal_prac_exam')
.then(
    console.log("connection Success")
)
.catch(err=>{
    console.log("error in connection "+err);
})