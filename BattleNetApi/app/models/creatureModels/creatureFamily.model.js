module.exports = mongoose => {
    const CreatureFamily = mongoose.model(
      "creatureFamily",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                creatureFamilyId:{
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
  
    return CreatureFamily;
  };