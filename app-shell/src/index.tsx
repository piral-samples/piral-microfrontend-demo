import * as React from 'react';
import { render } from 'react-dom';
import { createPiral, Piral, SetRedirect } from 'piral';
import { createContainersApi } from 'piral-containers';

const piral = createPiral({
  requestPilets() {
    return fetch('http://localhost:9000/api/v1/pilet')
      .then(res => res.json())
      .then(res => res.items);
  },
  plugins: [createContainersApi()],
});

const app = (
  <Piral instance={piral}>
    <SetRedirect from="/" to="/products" />
  </Piral>
);

render(app, document.querySelector('#app'));
