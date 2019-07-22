import * as React from 'react';
import { PiletApi } from 'app-shell';
import { Recommendations } from './Recommendations';

interface RecommendationExtension {
  item: string;
}

export function setup(app: PiletApi) {
  app.registerExtension<RecommendationExtension>('recommendations', ({ params }) => (
    <Recommendations item={params.item} />
  ));
}
