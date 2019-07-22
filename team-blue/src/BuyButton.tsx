import * as React from 'react';
import { prices } from './prices';

export interface BuyButtonProps {
  item: string;
  addToCart(item: string): void;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ item, addToCart }) => (
  <div className="blue-buy" id="buy">
    <button type="button" onClick={() => addToCart(item)}>
      buy for {prices[item]}
    </button>
  </div>
);
