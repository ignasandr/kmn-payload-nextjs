import express from 'express';
import payload from 'payload';
import next from 'next';

require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const server = express();

// Redirect root to Admin panel
// app.get('/', (_, res) => {
//   res.redirect('/admin');
// });

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: server,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})

const app = next({ dev });

const handle = app.getRequestHandler();


app.prepare().then(() => {
  console.log('NextJS started');

  server.get('*', (req, res) => handle(req, res));

  server.listen(process.env.PORT, async () => {
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  })
})

// Add your own express routes here