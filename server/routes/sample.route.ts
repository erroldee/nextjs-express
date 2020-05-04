import {Router, Response, Request, NextFunction} from 'express';
import {SampleController} from "../controllers/sample.controller";

export class SampleRouter {
    public router: Router;
    public sampleController: SampleController;

    constructor() {
        this.router = Router();
        this.sampleController = new SampleController();
        this.init();
    }

    init() {
        this.router.use("/", function(req: Request, res: Response, next: NextFunction) {
            // do something here global to all routers below
            next();
        });

        this.router.get("/sampleIds", function(req: Request, res: Response) {
            this.sampleController.sampleIds(function(response) {
                res.status(200).json({
                    error: response.error,
                    ids: response.ids
                });
            });
        }.bind(this));

        this.router.post("/sampleInfo", function(req: Request, res: Response) {
            this.sampleController.sampleInfo(Number(req.body.id), function(response) {
                res.status(200).json({
                    error: response.error,
                    info: response.info
                });
            });
        }.bind(this));

        this.router.get("/", function(req: Request, res: Response) {
            this.sampleController.sample(function(response) {
                res.status(200).json({
                    error: response.error,
                    posts: response.posts
                });
            });
        }.bind(this));

        this.router.post("/", function(req: Request, res: Response) {
            // req.body would hold the parameters
            this.sampleController.sample(function(response) {
                res.status(200).json({
                    error: response.error,
                    posts: response.posts
                });
            });
        }.bind(this));
    }
}