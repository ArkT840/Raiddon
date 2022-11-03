module.exports = mongoose => {
    const ItemClassesIndex = mongoose.model(
      "itemClassesIndex",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
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
  
    return ItemClassesIndex;
  };