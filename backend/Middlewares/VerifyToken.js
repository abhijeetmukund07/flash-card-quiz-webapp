const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        return res.status(401).send({ message: 'Not Authorized. Please Login Again', statusCode: 401 });
    } else {
        let token = bearerToken.split(' ')[1];
        try {
            let decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            req.body.username = decodedToken.username;
            next();
        } catch (err) {
            res.status(403).send({ message: 'Invalid Token', statusCode: 403 });
        }
    }
};

module.exports = verifyToken;
