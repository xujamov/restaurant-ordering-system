import admin from '../config/firebaseConf.js'

class Middleware {
    async decodeToken(req, res, next) {

        try {
            if (req.path.includes('/api/image/')) {
                return next();
            }
            const token = req.headers.authorization.split(' ')[1];
            const decodeValue = await admin.auth().verifyIdToken(token);
            if (decodeValue) {
                return next();
            }
            return res.json({message: 'Unauthorized', statusCode: 401});
        } catch (e) {
            return res.json({message: 'Internal server error', statusCode: 500});
        }

    }
}

export default new Middleware()