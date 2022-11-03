const db = require("../../models");
const creatureType = db.creatureType;

// Create and Save
exports.create = (req, res) => { 
};
// Retrieve all from the database.
exports.findAll = (req, res) => {
};
// Find with an id
exports.findOne = (req, res) => {
};
// Update by the id in the request
exports.update = (req, res) => {
};
// Delete with the specified id in the request
exports.delete = (req, res) => {
};
// Delete all from the database.
exports.deleteAll = (req, res) => {
};
// Find all published
exports.findAllPublished = (req, res) => {
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create
    const creatureType = new creatureType({
      region: req.body.region,
      creatureTypeId: req.body.creatureFamilyId,
      namespace:req.body.namespace,
      locale: req.body.locale
    });
  
    // Save in the database
    creatureType
      .save(creatureType)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Playable Race."
        });
      });
  };