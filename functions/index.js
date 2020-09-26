const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');

const stripe = require('stripe')('sk_test_51HVBIuDW83AN07MsuirTGpMZsCiWfoIDX33Nhi62yxpYXZx2xl8bl2ayJ4o3oatJkqeSGpSVXuvsnn6yxokZyFPu00R0ShO1O3')
//API

//App config
const app =  express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/', (request,response) => response.status(200).send('Hello World!'))
app.post('/payments/create', async (request,response) => {
    const total = request.query.total;

    console.log('Payment request recieved', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//listen command
exports.ali = functions.https.onRequest(app)

//Example endpoint
// http://localhost:5001/clone-amaze/us-central1/ali