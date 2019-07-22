import * as React from 'react';
import { renderInstance, buildLayout, setupState, setSharedDependencies } from 'piral';
import { Redirect } from 'react-router-dom';

renderInstance({
  layout: buildLayout(),
  config: {
    getDependencies: setSharedDependencies({
      'app-shell': require('piral'),
    }),
    state: setupState({
      Dashboard: () => <Redirect from="/" to="/products" />,
    }),
  },
});

export * from 'piral';
