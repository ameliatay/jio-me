const EventModel = require('../models/event')

// Create and Save a new event
exports.create = async (req, res) => {
    if (!req.body.eventTitle) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const event = new EventModel({
        title: req.body.eventTitle,
    });
    
    await event.save().then(data => {
        res.send({
            message: "Event created successfully!!",
            event: data
        });
    }).catch(err => {
        console.log(err.message)
        res.status(500).send({
            message: err.message || "Some error occurred while creating event"
        });
    });
};

// Retrieve all events from the database.
exports.findAll = async (req, res) => {
    try {
        const event = await EventModel.find();
        res.status(200).json(event);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single event with an id
exports.findOne = async (req, res) => {
    try {
        const event = await EventModel.findById(req.params.id);
        res.status(200).json(event);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update an event by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await EventModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Event not found.`
            });
        } else {
            res.send({ message: "Event updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete an event with the specified id in the request
exports.destroy = async (req, res) => {
    await EventModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Event not found.`
          });
        } else {
          res.send({
            message: "Event deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};