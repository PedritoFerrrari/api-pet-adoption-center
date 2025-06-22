const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function authorizeRole(role) {
    return (req, res, next) => {
        if (!role.includes(req.user.role)) {
            return res.status(403).json({ message: 'Acesso negado' });
        }
        next();
    };
}

function authorizeByOwnerId() {
    return (req, res, next) => {
        if (
            req.user.id == req.params.id
            || req.user.role == 'admin'
        ) {
            next();
        } else {

            return res.status(403).json({ message: "Acesso negado" });
        }
    };
}

module.exports = { authenticateToken, authorizeRole, authorizeByOwnerId };
