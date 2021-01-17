import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
    reviews: [
      {
        id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
      },
    ],
  };

  function renderRestaurantDetail({ accessToken = null } = {}) {
    return render(
      <RestaurantDetail
        restaurant={restaurant}
        accessToken={accessToken}
      />,
    );
  }

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      reviewField: {
        score: 0,
        description: '',
      },
    }));
  });

  it('renders name and address', () => {
    const { container } = renderRestaurantDetail();
    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
  });

  it('render reviews', () => {
    const { container } = renderRestaurantDetail();
    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
  });
});