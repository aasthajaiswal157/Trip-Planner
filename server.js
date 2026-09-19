const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.'));

let tripsData = [];

// 1. ट्रिप्स पाने की API
app.get('/api/trips', (req, res) => {
    res.json(tripsData);
});

// 2. ट्रिप जोड़ने की API
app.post('/api/trips', (req, res) => {
    const trip = req.body;
    tripsData.push(trip);
    res.json({ message: "ट्रिप सेव हो गई!", trips: tripsData });
});

// 3. ट्रिप डिलीट करने की API (यह मिसिंग थी)
app.delete('/api/trips/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < tripsData.length) {
        tripsData.splice(index, 1);
        res.json({ message: "ट्रिप डिलीट हो गई!", trips: tripsData });
    } else {
        res.status(400).json({ message: "Invalid index" });
    }
});

app.listen(PORT, () => {
    console.log(`सर्वर चालू है: http://localhost:${PORT}`);
});