module.exports = mongoose => {
    const PlayableClass = mongoose.model(
      "playableClass",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                classId:{
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
  
    return PlayableClass;
  };