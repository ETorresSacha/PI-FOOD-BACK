const { recipeNameAll } = require("../controllers/recipeName");

const recipeNames = async(req,res)=>{
    
    const {name}  = req.query; 

    try{
        // ********************     NAME     ********************
        if(name){
           const data=await recipeNameAll(name)
           return res.status(200).json(data) 

        }
        
        // ********************     ALL     ********************
       else{
         const data=await recipeNameAll()
         return res.status(200).json(data)
       }
      
        

   } catch(error){
      return res.status(500).json({error: error.message});
   }
   

}

module.exports={recipeNames}