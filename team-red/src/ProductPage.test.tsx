import * as React from 'react';
import { History } from 'history';
import { ProductPage } from './ProductPage';
import { shallow, mount, render } from 'enzyme';

const NoopComponent = () => <div />;

describe('ProductPage', () => {
  it('renders', () => {
    render(
      <ProductPage
        name={'porsche'}
        BasketInfo={NoopComponent}
        BuyButton={NoopComponent}
        Recommendations={NoopComponent}
        history={({} as any) as History}
      />,
    );
  });

  it('calls history push', () => {
    const push = jest.fn();
    const wrapper = shallow(
      <ProductPage
        name={'porsche'}
        BasketInfo={NoopComponent}
        BuyButton={NoopComponent}
        Recommendations={NoopComponent}
        history={({ push } as any) as History} // better use the official history mock here
      />,
    );

    wrapper.find('button').first().simulate('click');
    expect(push).toHaveBeenCalled();
  });
});
