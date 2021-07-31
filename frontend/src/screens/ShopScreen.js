import React from 'react';

import CollectionPreview from '../components/CollectionPreview';

import collections from '../data/collections';

import '../styles/screens/shop-screen.scss';

const ShopScreen = () => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

export default ShopScreen;
