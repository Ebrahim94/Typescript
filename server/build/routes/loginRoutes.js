"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("<div><div>you are logged in</div> <a href='/logout'>Log Out</a></div>");
    }
    else {
        res.send("<div><div>you are not logged in</div> <a href='/login'>Log In</a></div>");
    }
});
router.get('/login', function (req, res) {
    res.send("\n  <form method=\"post\">\n  <div>\n    <label>Email</label>\n    <input name=\"email\"/>\n  </div>\n  <div>\n    <label>Password</label>\n    <input name=\"password\" type=\"password\" />\n  </div>\n  <button>login</button>\n  </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email &&
        password &&
        email === 'ebrahim@me.com' &&
        password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('invalid email or password');
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('welcome to protected route');
});
