import express from 'express';
import http from 'http'; // Import http for typing
import hotelRoutes from './routes/hotelRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', hotelRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Type the server variable explicitly as http.Server or undefined
let server: http.Server | undefined;

if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export { app, server };
