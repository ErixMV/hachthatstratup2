import { Request, Response, Router } from "express";
import { neaRoutes } from "../api/Nea";
import { userRoutes } from "../api/User";
import { dbAccess } from "../middlewares/authorize";
import { feedDb } from "../scripts/csvJson";
import passport from 'passport';

const router = Router();

router.get('/feed', passport.authenticate('jwt', { session: false }), dbAccess, async (req, res) => {
    const resl = await feedDb()
    res.send(resl)
});

router.get('/protected', passport.authenticate('jwt', { session: false }), (req: Request, res: Response) => {
    res.send('This is a protected route for test');
})

router.use('/nea', neaRoutes);
router.use('/user', userRoutes);

export default router;