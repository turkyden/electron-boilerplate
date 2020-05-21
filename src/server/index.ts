import express, { Request, Response } from 'express';


const app = express();
const port = 3001;

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
})

app.get('/greet/:name', function (req: Request, res: Response) {
  res.send({
    status: 0, 
    datas: {
      name: req.params.name || null,
      time: new Date().toDateString()
    }
  });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));