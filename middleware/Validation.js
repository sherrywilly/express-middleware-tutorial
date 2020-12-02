function Validation(req,res,next){
    console.log("validating data")
    if(req.token){
        console.log("user is authenticated successfully")
        next()
        return;
    }
    console.log("invalid user")
    res.send("unable to validate user")
}

module.exports = (
    Validation
)