import * as React from 'react';
import { PiletApi } from 'app-shell';
import { ProductPage } from './ProductPage';

export function setup(app: PiletApi) {
  app.registerPage('/products/:name?', ({ history, match }) => (
    <ProductPage name={match.params.name || 'porsche'} history={history} />
  ));
}
