module.exports = mongoose => {
    const PowerType = mongoose.model(
      "powerType",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                powerTypeId:{
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
  
    return PowerType;
  };