import { Router, type Request, type Response } from 'express';
import { verifyRefreshToken, generateAccessToken } from '../utils/token';

const refreshRouter = Router();

refreshRouter.post('/refresh', (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token not provided.' });
  }

  try {
    const payload = verifyRefreshToken(refreshToken);
    const newAccessToken = generateAccessToken({
      userId: payload.userId,
      email: payload.email,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired refresh token.' });
  }
});

export { refreshRouter };
