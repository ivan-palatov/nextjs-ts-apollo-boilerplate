import * as express from 'express';
import * as next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT!) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/user/confirm/:token', (req, res) => {
      return app.render(req, res, '/user/confirm', { token: req.params.token });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
