import express from 'express';
const app = express();
const port = 9999;

app.use((req,res) => {
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
});

app.listen(port, () => {
    console.log(`Server successfully listening to port :: ${port}`);
});
