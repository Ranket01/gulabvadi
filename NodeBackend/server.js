const express = require('express');
const app = express();
const port = 5000; // Choose a port number for your server


// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with the appropriate origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Configure Express to parse JSON in request body
app.use(express.json());

// Twilio credentials
const accountSid = 'AC975336217d07d4f3aa36743d5a169453';
const authToken = '3eabc047e787cf5d57e260c6f1fb733c';
const client = require('twilio')(accountSid, authToken);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle form submission
app.post('/api/feedback', (req, res) => {
  // Extract form data from request body
  const {nameofuser, email, phone,message } = req.body;
  console.log(req.body)
  

  // Send WhatsApp message
  client.messages
    .create({
      body: `name: ${nameofuser}, email: ${email}, phone: ${phone}, message : ${message}`,
      from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
      to: 'whatsapp:+918758199724' // Recipient's WhatsApp number
    })
    .then((message) => {
      console.log(`WhatsApp message sent with SID: ${message.sid}`);
      res.json({ success: true });
    })
    .catch((error) => {
      console.error('Error sending WhatsApp message:', error);
      res.status(500).json({ error: 'Failed to send WhatsApp message' });
    });
});
