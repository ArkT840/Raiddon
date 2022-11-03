module.exports = mongoose => {
    const ItemClass = mongoose.model(
      "itemClass",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                itemClassId:{
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
  
    return ItemClass;
  };