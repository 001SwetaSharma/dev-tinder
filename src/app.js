import express from 'express';
import { adminAuth } from './middlewares/auth.js';
import * as db from './config/database.js';
import User from './models/user.js';
const app = express();
const port = 9999;

/* app.use((req,res) => {
    res.send('Inside request handler...');
});

app.get('/users', (req,res) => {
    res.send({firstName: 'Sweta', lastName: 'Sharma', });
});

app.post('/users', (req,res) => {
    res.send('Saved data successfully........');
});

app.use('/hello', (req,res) => {
    res.send('hello hi');   
});

app.use('/hello/2', (req,res) => {
    res.send('hello hello hello.............');
}); */

//app.use('/admin', adminAuth);
/* app.use('/users', 
    (req, res, next) => {
        console.log('route 1');
        next();
        //res.send('route 1');
    },
    (req, res, next) => {
        console.log('route 2');
        next();
        //res.send('route 2');
    },
    
) */


/* app.use('/', (err, req, res, next) => {
    if(err) {
        res.status(500).send('Something went wrong');
    }
});

app.get('/users', (req, res) => {
    throw new Error('Error Encountered');

    res.status(200).send('Successfully fetched the user');
}); */

app.use(express.json());
app.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send('User created successfully');
    } catch(err) {
        res.status(500).send(`Error while sign up :: ${err}`);
    }
});

const connectDb = db.connectDb;
connectDb().then(() => {
    console.log(`Database connected succesfully!!`);
    app.listen(port, () => {
        console.log(`Server successfully listening to port :: ${port}`);
    });
}).catch((err) => {
    console.log(`Error in db connection :: ${err}`);
});
