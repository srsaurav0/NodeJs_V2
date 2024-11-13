import express from 'express';
import hotelRoutes from './routes/hotelRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', hotelRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Log the environment to verify
console.log(`Running in environment: ${process.env.NODE_ENV}`);

let server: ReturnType<typeof app.listen>;
// Ensure the server does not start listening when in test environment
if (process.env.NODE_ENV !== 'test') {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export { app, server };
