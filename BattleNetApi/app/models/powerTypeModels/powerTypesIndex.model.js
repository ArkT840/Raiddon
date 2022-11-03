module.exports = mongoose => {
    const PowerTypesIndex = mongoose.model(
      "powerTypesIndex",
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
  
    return PowerTypesIndex;
  };