import React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/App";
import type { FastifyRequest } from "fastify";
import Router from "react-router-dom";

const props = {
  name: "John",
};


export type HTMLRenderer = (req: FastifyRequest, context?: object) => string;


export const renderedHTML: HTMLRenderer = (req, context = {}) =>
  renderToString(
    <Router.StaticRouter location={req.url} context={context}>
      <App {...props} />
    </Router.StaticRouter>
  );
