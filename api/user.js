module.exports = (req,res) => {
    if(req.method==="GET") {
        res.json([
            {name: "Raj" , location: "India"},
            {name: "Raj2" , location: "Earth"}
        ])
    } else {

    }
}