"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires, promise/catch-or-return, promise/catch-or-return, promise/always-return, security/detect-non-literal-require */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const development = process.env.NODE_ENV !== "production";
const app = next({ dev: development });
const handle = app.getRequestHandler();
const getMessages = (locale) => {
    return require(`../lang/${locale}.json`);
};
const detectLocale = (request) => request.headers["accept-language"].slice(0, 2);
app.prepare().then(() => {
    createServer((request, response) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(request.url, true);
        if (detectLocale(request)) {
            response.messages = getMessages(detectLocale(request));
            response.locale = detectLocale(request);
        }
        handle(request, response, parsedUrl);
    }).listen(3000, (error) => {
        if (error) {
            throw error;
        }
        console.log("> Ready on http://localhost:3000");
    });
});
