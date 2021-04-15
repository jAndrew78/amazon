const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51Ie323IRh5MugjDmx2rvmCsUkymGXAiKbJvzZ7D6W3odS3WI8B05ZfDimgj79TM5UzETum7hGEp6HJSn2e8IdDXN00Pcixr7xC'
);


// API

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get('/', (req, res) => res.status(200).send("hello world"));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('payment request received', {total})

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: 'usd',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// EXAMPLE ENDPOINT
// http://localhost:5001/fs-c9c42/us-central1/api




// *** READ LATER ***
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
