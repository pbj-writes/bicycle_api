const express = require('express');
const app = express();
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Configure morgan to log requests
app.use(morgan('dev'));

// Parse JSON request bodies
app.use(bodyParser.json());

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: 'postgres://dpckjuce:xdPlZTbz1AAIFWaUtUmDiM1sqIKgyXS9@mahmud.db.elephantsql.com/dpckjuce',
});

// Test the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database');
  }
});

// Define your routes and CRUD operations here

// Start your Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Add homepage with 
app.get('/', (req,res) => {
    res.send("HOME PAGE !!!")
})

app.post('/bicycles', (req, res) => {
    const { bicycle_id, make, model, groupset, frame_type, frame_size, prime_color, model_year, crank_length } = req.body;

    if (!bicycle_id || !make || !model) {
      return res.status(400).json({ error: 'Bicycle ID, make, and model are required' });
    }

    pool.query('INSERT INTO bicycles (bicycle_id, make, model, groupset, frame_type, frame_size, prime_color, model_year, crank_length) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [bicycle_id, make, model, groupset, frame_type, frame_size, prime_color, model_year, crank_length], (err, result) => {
      if (err) {
        console.error('Error inserting bicycle into the database', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Bicycle created successfully' });
      }
    });
  });


  app.get('/bicycles', (req, res) => {
    // Use COUNT() to get the total number of bicycles
    pool.query('SELECT COUNT(*) as total_bicycles FROM bicycles; SELECT * FROM bicycles;', (err, result) => {
      if (err) {
        console.error('Error executing SQL query', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        // Extract the count from the first query result
        const totalBicycles = result[0].rows[0].total_bicycles;

        // Extract user data from the second query result
        const bicycles = result[1].rows;

        // Create a response object with both the count and user data
        const response = {
          total_bicycles: totalBicycles,
          bicycles: bicycles,
        };

        res.json(response);
      }
    });
  });

  app.put('/bicycles/:id', (req, res) => {
    const bicycleId = req.params.id;
    const { bicycle_id, make, model, groupset, frame_type, frame_size, prime_color, model_year, crank_length} = req.body;

    if (!bicycle_id || !make || !model) {
      return res.status(400).json({ error: 'Bicycle ID, make, and model are required' });
    }

    pool.query('UPDATE bicycles SET bicycle_id = $1, make = $2 WHERE id = $3', [bicycle_id, make, model, groupset, frame_type, frame_size, prime_color, model_year, crank_length], (err, result) => {
      if (err) {
        console.error('Error updating bicycle in the database', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ message: 'Bicycle updated successfully' });
      }
    });
  });


  app.delete('/bicycles/:id', (req, res) => {
    const userId = req.params.id;

    pool.query('DELETE FROM bicycles WHERE id = $1', [bicycleId], (err, result) => {
      if (err) {
        console.error('Error deleting user from the database', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ message: 'Bicycle deleted successfully' });
      }
    });
  });