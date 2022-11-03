  module.exports = mongoose => {
    const PlayableRace = mongoose.model(
      "playableRace",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                playableRaceId:{
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
  
    return PlayableRace;
  };