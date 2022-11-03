module.exports = mongoose => {
    const PlayableClassesIndex = mongoose.model(
      "playableClassesIndex",
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
  
    return PlayableClassesIndex;
  };