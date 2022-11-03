module.exports = app => {
    const creatureFamilies = require("../controllers/creatureControllers/creatureFamily.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Playable Race
    router.post("/", creatureFamilies.create);
  
    // Retrieve all Playable Race
    router.get("/", creatureFamilies.findAll);
  
    // Retrieve all published Playable Race
    router.get("/published", creatureFamilies.findAllPublished);
  
    // Retrieve a single Playable Race with id
    router.get("/:id", creatureFamilies.findOne);
  
    // Update a Playable Race with id
    router.put("/:id", creatureFamilies.update);
  
    // Delete a Playable Race with id
    router.delete("/:id", creatureFamilies.delete);
  
    // Create a new Playable Race
    router.delete("/", creatureFamilies.deleteAll);
  
    app.use('/api/creatureFamilies', router);
  };