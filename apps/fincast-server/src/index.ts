import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001; // Use a different port than the client

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Fincast Server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 