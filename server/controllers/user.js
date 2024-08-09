 import User from '../models/User.js'
 
const postSignup = async (req, res) => {
    const { fullname, email, password, dob } = req.body ;
 
    const user = new User({
 
       fullname: fullname,
       email: email,
       password: password,
       dob: new Date (dob) 
    }) ;
 
    try{
    const savedUser = await user.save();
 
    res.json ({
       success : true,
       message : `Signup successful`,
       data : savedUser
    })
 
    }
    catch(e){
       res.json({
          success:false,
          message: e.message,
          data:null
 
       })
    }
 }


 const postLogin = async(req,res)=>{

    const {email,password} =req.body
 
    const user = await User.findOne({
 
       email:email,
       password:password
    });
 
    if(user){
       res.json({
          success:true,
          message:`user login successfully`,
          data:user
       })
    }
    else{
       res.json({
          success:false,
          message:`invalid credintial`,
          data:null
       })
    }
 }

 export {
    postSignup,
    postLogin
 }