import * as React from 'react';
import { useExtension } from 'app-shell';
import { History } from 'history';
import { product } from './product';

export interface ProductPageProps {
  name: string;
  history: History;
}

export const ProductPage: React.FC<ProductPageProps> = ({ name, history }) => {
  const BasketInfo = useExtension('basket-info');
  const BuyButton = useExtension('buy-button');
  const Recommendations = useExtension('recommendations');
  const [variant] = product.variants.filter(v => name === v.sku);

  return (
    variant && (
      <>
        <h1 id="store">The Model Store</h1>
        <BasketInfo />
        <div id="image">
          <div>
            <img src={variant.image} alt={variant.name} />
          </div>
        </div>
        <h2 id="name">
          {product.name} <small>{variant.name}</small>
        </h2>
        <div id="options">
          {product.variants.map(variant => (
            <button
              key={variant.sku}
              className={name === variant.sku ? 'active' : ''}
              type="button"
              onClick={() => history.push(`/products/${variant.sku}`)}>
              <img src={variant.thumb} alt={variant.name} />
            </button>
          ))}
        </div>
        <BuyButton params={{ item: variant.sku }} />
        <Recommendations params={{ item: variant.sku }} />
      </>
    )
  );
};
