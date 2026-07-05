const express = require('express');
const app = express();
const port = 3001;
app.use(express.static('client/build'));
app.get('/api/cars', (req, res) => {
  const cars = [
    { id: 1, name: 'Car 1', model: 'model1' },
    { id: 2, name: 'Car 2', model: 'model2' }
  ];
  res.json(cars);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});