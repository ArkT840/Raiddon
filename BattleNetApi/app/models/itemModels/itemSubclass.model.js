module.exports = mongoose => {
    const ItemSubclass = mongoose.model(
      "itemSubclass",
      mongoose.Schema(
        
            {
                region:{
                    type: String,
                    required: true,
                },
                itemClassId:{
                    type:Number,
                    required: true
                },
                itemSubclassId:{
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
  
    return ItemSubclass;
  };