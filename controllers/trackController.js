const Track = require('../models/Track');

exports.addTrack = async (req, res) => {
  try {
    const track = new Track(req.body);
    await track.save();
    res.status(201).json(track);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
