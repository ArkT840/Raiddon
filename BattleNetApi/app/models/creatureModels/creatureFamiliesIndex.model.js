module.exports = mongoose => {
    const CreatureFamiliesIndex = mongoose.model(
      "creatureFamiliesIndex",
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
  
    return CreatureFamiliesIndex;
  };