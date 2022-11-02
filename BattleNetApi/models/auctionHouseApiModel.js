const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const AuctionHouseIndex = new Schema({
    region:{
        type: String,
        required: true,
    },
    connectedRealmId:{
        type: Integer,
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
})

const Auctions = new Schema({
    region:{
        type: String,
        required: true,
    },
    connectedRealmId:{
        type: Integer,
        required: true
    },
    auctionHouseId:{
        type: Integer,
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
})

const User = mongoose.model('user', UserSchema)
module.exports = User