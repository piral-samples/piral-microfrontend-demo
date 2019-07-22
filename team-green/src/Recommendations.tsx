import * as React from 'react';
import { allRecommendations } from './recos';

export interface RecommendationsProps {
  item: string;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ item }) => {
  const recommendations: Array<{ image: string; id: string }> = allRecommendations[item] || [];
  return (
    <div className="green-recos" id="reco">
      <h3>Related Products</h3>
      {recommendations.map(recommendation => (
        <img src={recommendation.image} key={recommendation.id} alt={`Recommendation ${recommendation.id}`} />
      ))}
    </div>
  );
};
