const express = require("express");
const Chef=require('./Data/Chef.json')
const Slide=require('./Data/SliderImages.json')
const Recipe=require('./Data/Recipe.json')
const app=express();
const cors = require('cors')
const port=process.env.PORT||3000
app.use(cors())
app.get('/', (req, res) =>{
    res.send(Chef)
});
app.get('/slider', (req, res) =>{
    res.send(Slide)
});
app.get('/chef', (req, res) =>{
    res.send(Recipe)
});
app.get('/chef/:name', (req, res) => {
    
    const name=req.params.name
        const recipeData = Recipe.filter(n => n.authorName == name);
        res.send(recipeData)
    

})
app.get('/recipe/:id', (req, res) => {
    
    const id=req.params.id
        const recipeData = Recipe.find(n => n.id == id);
        res.send(recipeData)
    

})
app.listen(port,()=>{
    console.log(`this is workting ${port}`)
})