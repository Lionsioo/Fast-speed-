const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./routes/auth');
const deviceRoutes = require('./routes/deviceRoutes');
const imageRoutes = require('./routes/imageRoutes');
const trackerRoutes = require('./routes/trackerRoutes');
const trackRoutes = require('./routes/trackRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/track', trackerRoutes);
app.use('/api/tracks', trackRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
})
.catch(err => console.log(err));
    
