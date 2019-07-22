import * as React from 'react';

export interface BasketInfoProps {
  count: number;
}

export const BasketInfo: React.FC<BasketInfoProps> = ({ count }) => (
  <div className="blue-basket" id="basket">
    <div className={count === 0 ? 'empty' : 'filled'}>basket: {count} item(s)</div>
  </div>
);
