module.exports = mongoose => {
    const Creature = mongoose.model(
      "creature",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                creatureId:{
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
  
    return Creature;
  };