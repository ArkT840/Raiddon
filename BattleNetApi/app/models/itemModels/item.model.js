module.exports = mongoose => {
    const Item = mongoose.model(
      "item",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                itemId:{
                    type:Number,
                    required: true
                },
                namespace:{
                    type:String,
                    required: true
                },
                locale:{
                    type:String,
                    required: false
                }
        }
      )
    );
  
    return Item;
  };