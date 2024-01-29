// route.ts
import { Router, Request, Response, NextFunction } from 'express';
import { Occupation, User } from '../utils/user.dto';
import userSchema from '../utils/user.schema';
const router = Router();

// Ruta de bienvenida
router.get('/', (_req: Request, res: Response, next: NextFunction) => {
	try {
		res.send('¡Hola, mundo!').end();
	} catch (err) {
		next(err);
	}
});

// Ruta para obtener opciones de ocupación
router.get(
	'/user/occupation',
	async (_req: Request, res: Response, next: NextFunction) => {
		try {
			const occupationOptions = Object.values(Occupation);
			res.status(200).json(occupationOptions).end();
		} catch (err) {
			next(err);
		}
	},
);

// Ruta para crear un nuevo usuario
router.post(
	'/user',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { body } = req;
			const newData: User = {
				email: body.email,
				nickName: body.nickName,
				occupation: body.occupation,
			};
			const newUser = await userSchema.create(newData);
			res.status(201).json(newUser).end();
		} catch (err) {
			next(err);
		}
	},
);

// Ruta para obtener todos los usuarios
router.get(
	'/user',
	async (_req: Request, res: Response, next: NextFunction) => {
		try {
			const users = await userSchema.find();
			res.status(200).json(users).end();
		} catch (err) {
			next(err);
		}
	},
);

// Ruta para obtener un usuario por ID
router.get(
	'/user/:id',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;
			const user = await userSchema.findById(id);
			res.status(200).json(user).end();
		} catch (err) {
			next(err);
		}
	},
);

// Ruta para actualizar un usuario por ID
router.put(
	'/user/:id',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;
			const { body } = req;
			const updateData: User = {
				email: body.email,
				nickName: body.nickName,
				occupation: body.occupation,
			};
			const updatedUser = await userSchema.findByIdAndUpdate(id, updateData, {
				new: true,
				runValidators: true,
			});
			res.status(200).json(updatedUser).end();
		} catch (err) {
			next(err);
		}
	},
);

// Ruta para eliminar un usuario por ID
router.delete(
	'/user/:id',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;
			const data = await userSchema.deleteOne({ _id: id });
			res.status(200).json(data).end();
		} catch (err) {
			next(err);
		}
	},
);

export default router;
