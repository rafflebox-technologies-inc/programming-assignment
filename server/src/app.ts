import express from 'express';
import * as bodyParser from 'body-parser';
import { connect } from './db/db';
import { getManager, getConnection } from 'typeorm';
import { City } from './db/models/Cities.model';

connect();

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(bodyParser.json({
  limit: '50mb',
  verify(req: any, res, buf, encoding) {
    req.rawBody = buf;
  }
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/cities', async (req, res) => {
  const city = new City();
  city.name = req.body.name;
  city.time = req.body.time;
  city.temperature = req.body.temperature;
  await city.save();

  res.send(city);
});

app.get('/cities', async (req, res) => {
  const manager = getManager();
  // Could not get the QueryBuilder to complete the inner join.
  // Fell back to straight SQL.
  const cities = await manager.query('SELECT cities.* FROM cities INNER JOIN (SELECT id, MAX(time) AS MaxTime FROM cities GROUP BY name) cc ON cities.id = cc.id AND cities.time = cc.MaxTime');

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

// Unneeded route.
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

app.delete('/cities/:name', async (req, res) => {
  const city = await getConnection()
    .createQueryBuilder()
    .delete()
    .from(City)
    .where('name = :name', { name: req.params.name })
    .execute();

  res.json({ message: 'City(s) Deleted', data: city });
});

export { app };
