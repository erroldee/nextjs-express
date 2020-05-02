import express, { Request, Response } from "express";
import next from "next";
import Server from "next/dist/next-server/server/next-server";

const dev: boolean = process.env.NODE_ENV !== "production";
const app: Server = next({ dev });
const handle: Function = app.getRequestHandler();
const port: number = Number(process.env.PORT) || 3000;

(async () => {
    try {
        await app.prepare();
        const server: express.Application = express();
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();