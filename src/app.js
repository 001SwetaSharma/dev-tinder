import express from 'express';
const app = express();
const port = 3000;
app.use((req,res) => {
    console.log('Inside request handler...');
});

app.listen(port, () => {
    console.log(`Server successfully listening to port :: ${port}`);
})