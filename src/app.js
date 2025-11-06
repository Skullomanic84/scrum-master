import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

//configuration
app.use(express.json({
    limit: '16kb'
}));

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));

app.use(express.static('public'));

app.use(cookieParser());

//cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
})
);

//routes

import healthCheckRouter from './routes/healthcheck.route.js';
import authRouter from './routes/auth.routes.js';

app.use('/api/v1/healthcheck', healthCheckRouter);
app.use('/api/v1/auth', authRouter);


export default app;
