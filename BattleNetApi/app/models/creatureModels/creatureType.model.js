module.exports = mongoose => {
    const CreatureType = mongoose.model(
      "creatureType",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                creatureTypeId:{
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
  
    return CreatureType;
  };