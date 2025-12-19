import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Simple hardcoded check
    if (email === 'admin' && password === 'admin') {
        // Return a mock token
        return res.json({
            access_token: 'mock-admin-token-12345',
            expires_in: 3600
        });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
});

export default router;
