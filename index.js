const express=require("express");
const app=express();
console.dir(app);
let port=3000;
app.listen(port, ()=>{
    console.log(`Server is running on port  ${port}`);
});
// app.use((req, res)=>{
//     console.log(req);
//     console.log("request recieved");
//     let code="<h1>Fruits<h1>"
//     res.send(code);
// });
app.get("/",(req,res)=>{
    res.send("hello i m root");
})
app.get("/:username/:id",(req,res)=>{
    let {username, id}=req.params;
    res.send(`Welcome to the page of @${username}`);
})
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if (!q){
        res.send("nothing searched");
    }
    res.send(`search results for query: ${q}`);
});

// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// })
// app.get("*",(req,res)=>{
//     res.send("This path does not exist");
// })
