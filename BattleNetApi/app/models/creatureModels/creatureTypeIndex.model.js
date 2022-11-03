module.exports = mongoose => {
    const CreatureTypeIndex = mongoose.model(
      "creatureTypeIndex",
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
  
    return CreatureTypeIndex;
  };