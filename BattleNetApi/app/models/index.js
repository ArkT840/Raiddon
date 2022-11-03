const dbConfig = require("../config/db_config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;


//Creature API
db.creatureFamiliesIndex = require("./creatureModels/creatureFamiliesIndex.model.js")(mongoose);
db.creatureFamily=require("./creatureModels/creatureFamily.model.js")(mongoose);
db.creatureTypeIndex=require("./creatureModels/creatureTypeIndex.model.js")(mongoose);
db.creatureType=require("./creatureModels/creatureType.model.js")(mongoose);
db.creature=require("./creatureModels/creature.model.js")(mongoose);

//Items API
db.itemClassesIndex=require("./itemModels/itemClassesIndex.model.js")(mongoose);
db.itemClass=require("./itemModels/itemClass.model.js")(mongoose);
db.itemSubclass=require("./itemModels/itemSubclass.model.js")(mongoose);
db.item=require("./itemModels/item.model.js")(mongoose);

//Playable Class API
db.playableClassesIndex = require("./playableClassModels/playableClassesIndex.model")(mongoose);
db.playableClass = require("./playableClassModels/playableClass.model.js")(mongoose);

//Playable Race API
db.playableRacesIndex = require("./playableRaceModels/playableRacesIndex.model.js")(mongoose);
db.playableRace = require("./playableRaceModels/playableRace.model.js")(mongoose);

//Power Type API
db.powerTypesIndex = require("./powerTypeModels/powerTypesIndex.model.js")(mongoose);
db.powerType = require("./powerTypeModels/powerType.model.js")(mongoose);



module.exports = db;
