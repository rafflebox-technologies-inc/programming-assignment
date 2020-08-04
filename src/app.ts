import express from 'express';
import * as bodyParser from 'body-parser';
import { connect } from './db/db';
import { City } from './db/models/Cities.model';

connect();

const app = express();

app.use(bodyParser.json({
  limit: '50mb',
  verify(req: any, res, buf, encoding) {
    req.rawBody = buf;
  }
}));
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/cities', async (req, res) => {
  // Possibility to catpture a duplicate entry? Or handle on front end?
  const city = new City();
  city.city_name = req.body.city_name;
  city.time = req.body.time;
  city.temperature = req.body.temperature;
  await city.save();

  res.send(city);
});

app.get('/cities', async (req, res) => {
  const cities = await City.find();
  res.send(cities);
});

app.get('/cities/:id', async (req, res) => {
  const city = await City.findOne({
    where: {
      id: req.params.id
    }
  });

  if (city) {
    res.json(city);
  } else {
    res.status(404).send({ message: 'City not found.' });
  }
});

app.put('/cities/:id', async (req, res) => {
  const city = await City.findOne({
    where: {
      id: req.params.id
    }
  });

  if (city) {
    if (req.body.time) {
      city.time = req.body.time;
    }
    
    if (req.body.temperature) {
      city.temperature = req.body.temperature;
    }    
    await city.save();
  
    res.send(city);
  } else {
    res.status(404).send({ message: 'City not found' });
  }
});

app.delete('cities/:id', async (req, res) => {
  const city = await City.findOne({
    where: {
      id: req.params.id
    }
  });

  if (city) {
    await city.remove();
    res.json({ message: 'City Deleted' });
  } else {
    res.status(404).send({ message: 'City not found'});
  }
});

export { app };
