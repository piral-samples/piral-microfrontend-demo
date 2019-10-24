import * as React from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import { createPiral, Piral, SetRoute } from 'piral';
import { createContainerApi } from 'piral-containers';

const piral = createPiral({
  requestPilets() {
    return fetch('http://localhost:9000/api/v1/pilet')
      .then(res => res.json())
      .then(res => res.items);
  },
  extendApi: [createContainerApi()],
});

console.log(piral.root);

const app = (
  <Piral instance={piral}>
    <SetRoute path="/" component={() => <Redirect from="/" to="/products" />} />
  </Piral>
);

render(app, document.querySelector('#app'));

export * from 'piral';
