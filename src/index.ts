// index.ts
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from './routes/route';
import notFound from './middleware/notFound';
import handleErrors from './middleware/handleErrors';

import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './middleware/connectToDataBase';
connectToDatabase();

const app: Application = express();
app.set('appName', 'API');
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use((_req: Request, res: Response, next: NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/', router);
app.use(notFound);
app.use(handleErrors);

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
