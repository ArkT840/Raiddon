module.exports = mongoose => {
    const PlayableRacesIndex = mongoose.model(
      "playableRacesIndex",
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
  
    return PlayableRacesIndex;
  };