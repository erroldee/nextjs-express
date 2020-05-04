import express, { Request, Response, NextFunction } from 'express';
import next from "next";
import Server from "next/dist/next-server/server/next-server";
import {json, urlencoded} from 'body-parser';
import compression from 'compression';
import {SampleRouter} from "./routes/sample.route";

/*
import * as mongoose from "mongoose";
import {Constants} from "./constants/constants";
*/

export class App {
    private app: Server;
    private handle: Function;
    public express: express.Application;

    constructor(
        private callback: Function
    ) {
        const dev = process.env.NODE_ENV !== "production";
        this.app = next({ dev });
        this.handle = this.app.getRequestHandler();

        this.app.prepare().then(() => {
            this.express = express();
            this.middleware();
            this.setRoutes();
            this.callback();
        });
    }

    private middleware = () => {
        // mongoose.connect(Constants.mongoServer + ":" + Constants.mongoPort + "/" + Constants.mongoDB);

        this.express.disable('x-powered-by');

        this.express.use(json());
        this.express.use(compression());
        this.express.use(urlencoded({ extended: true }));
    };

    private setRoutes = () => {
        const self = this;

        this.express.use('/api/sample', new SampleRouter().router);

        this.express.use((req: Request, res: Response) => {
            return self.handle(req, res);
        });

        this.express.use((req: Request, res: Response, next: NextFunction) => {
            let err: {[s: string]: any} = {
                status: 404,
                message: "Not Found"
            };
            next(err);
        });

        this.express.use((err: any, req: Request, res: Response) => {
            res.status(err.status || 500).json({
                error: {},
                message: err.message
            });
        });
    };
}