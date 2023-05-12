import React from 'react';
import { Item } from '../../App';

interface TotalProps {
  items: Item[];
}

const Total: React.FC<TotalProps> = ({ items }) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += parseFloat(items[i].price);
  }
  return (
    <div>
      <p className="text">Total Price: {total}</p>
    </div>
  );
};

export default Total;
