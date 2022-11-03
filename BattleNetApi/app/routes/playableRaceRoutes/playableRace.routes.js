module.exports = app => {
    const playableRaces = require("../../controllers/playableRaceControllers/playableRace.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Playable Race
    router.post("/", playableRaces.create);
  
    // Retrieve all Playable Race
    router.get("/", playableRaces.findAll);
  
    // Retrieve all published Playable Race
    router.get("/published", playableRaces.findAllPublished);
  
    // Retrieve a single Playable Race with id
    router.get("/:id", playableRaces.findOne);
  
    // Update a Playable Race with id
    router.put("/:id", playableRaces.update);
  
    // Delete a Playable Race with id
    router.delete("/:id", playableRaces.delete);
  
    // Create a new Playable Race
    router.delete("/", playableRaces.deleteAll);
  
    app.use('/api/playableRaces', router);
  };