import absoluteUrl from "next-absolute-url";
import {Constants} from "../constants/constants";
import {IncomingMessage} from "http";

export class MapHostNameHelper {
    static mapURL(req: IncomingMessage): void {
        const { origin } = absoluteUrl(req);
        Constants.hostURL = origin;
    }
}