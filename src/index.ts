import express, { Express, Request, Response } from 'express';
import http from 'http';
import dataSource from './config/dataSource';  // assuming that dataSource is a module
import errorHandler from './middlewares/errorHandler'; // assuming that errorHandler is a module
import router from './router'; // assuming that router is a module

const connectDB = async (): Promise<void> => {
	try {
		await dataSource.initialize();
		console.log('DB connected!');
	} catch (err) {
		console.error(err);
	}
};

const loadExpressApp = async (): Promise<Express> => {
	await connectDB();

	const app = express();
	
	app.use(express.json());

	app.use(router);
	app.use(errorHandler);
	app.all('*', (_, res: Response) => {
		res.status(404).json({
			data: null,
			error: {
				message: 'URL Not Found',
			},
		});
	});

	return app;
};

const startServer = async (): Promise<void> => {
	const app: Express = await loadExpressApp();

	const server: http.Server = http.createServer(app);

	const port: string | number = process.env.PORT || 3000;

	server.listen(port, () => {
		console.log(`Server is listening on port ${port}`);
	});
};

startServer()
	.then(() => {
		console.log('modified')
		console.log('Server started!');
	})
	.catch((err: Error) => {
		console.error(err);
	});
