import React from 'react';

import CollectionPreview from '../components/CollectionPreview';

import collections from '../data/collections';

const ShopScreen = () => {
  return (
    <>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </>
  );
};

export default ShopScreen;
