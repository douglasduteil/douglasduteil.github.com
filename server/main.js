//

import Debug from 'debug';
import fse from 'fs-extra';
import { runInContext, createContext, Script } from 'vm';
import path from 'path';
import nanorouter from 'nanorouter';
import hyper, { bind } from 'viperhtml';
import { app } from '../src/app/app';
import hyperhtmlHtmlViewsLoader from 'hyperhtml-html-views-loader';

//

app.hyper = hyper;

const log = Debug('my:server:main');
const templatePath = 'src/template.html';

//

export const routes = [
  '/index.html',
  '/me.html',
  '/achievements.html',
  '/rockets.html',
  '/contact.html'
];

export default async () => {
  const templateFileBuffer = await fse.readFile(templatePath);
  const htmlifyTemplate = hyperhtmlHtmlViewsLoader
    .call({}, templateFileBuffer.toString())
    .replace(/^module.exports = "/, '`')
    .replace(/";$/, '`');
  const sandbox = createContext({});
  const hyperTemplate = runInContext(
    `(render, model) => render${htmlifyTemplate}`,
    sandbox
  );

  return async (ctx, next) => {
    const {
      request: { url, method }
    } = ctx;

    if (/^(?!GET|HEAD).*$/.test(method)) {
      return next();
    }

    if (!['/', ...routes].includes(url)) {
      return next();
    }

    const response = await app.toString(url);

    ctx.body = hyperTemplate(hyper, response).toString();
  };
};
