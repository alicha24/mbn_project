const express = require('express');
const Joi = require('joi'); // Data Validation -- useful library
const app = express();
const fs = require('fs'); // Import Fs module --> File System


// Example: Read Stream
const myReadStream = fs.createReadStream(__dirname + '/report.txt', 'utf8');

myReadStream.on('data', (chunk) => {
    console.log('----------------------------');
    console.log(chunk);
    console.log('----------------------------');
});

// On stream Open 
myReadStream.on('open', () => {
    console.log('Stream Open')
})

// On Stream End
myReadStream.on('end', () => {
    console.log('Stream End')
})

/*const orders = [
    {
        id: 1,
        name: 'Antena Wifi 3.7GHz',
        price: 99.99,
        discount: 12.99,
        stock: 425
    },
    {
        id: 2,
        name: 'Alfa Wifi GT-9',
        price: 20.99,
        discount: 10.99,
        stock: 300
    },
    {
        id: 3,
        name: 'Mouse sans fil - Model: Razen',
        price: 12.99,
        discount: 5.99,
        stock: 120
    },
    {
        id: 4,
        name: 'Cable Fibre Optique',
        price: 320.99,
        discount: 20.99,
        stock: 150
    }
];


//Welcome page
app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to our new website');
});


//Get all orders
app.get('/api/orders', (req, res) => {
    res.status(200);
    res.send(orders);
});

//Get a specific ID
app.get('/api/orders/:id', (req, res) => {
    const order = orders.find(item => {
        item.id === parseInt(req.params.id);
    });

    if (!order) {
        res.status(404)
            .send('Something went wrong!!')
    };


    res.send(order);
});

app.listen(PORT, () => {
    console.log('Server Listening on port: ' + PORT);
});*/


