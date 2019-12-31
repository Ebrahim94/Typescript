import { Router, Request, Response, NextFunction } from 'express';
import { get } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not Permitted');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(
      `<div><div>you are logged in</div> <a href='/logout'>Log Out</a></div>`
    );
  } else {
    res.send(
      `<div><div>you are not logged in</div> <a href='/login'>Log In</a></div>`
    );
  }
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === 'ebrahim@me.com' &&
    password === 'password'
  ) {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('invalid email or password');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('welcome to protected route');
});

export { router };
