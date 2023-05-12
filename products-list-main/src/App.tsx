import './App.css';
import React, { useState } from 'react';
import Items from './components/item/items';
import Total from './components/total/total';
import AddItem from './components/addItem/AddItem ';

export interface Item {
  id: number;
  product: string;
  price: number;
}
export type DeleteItem = (id: number) => void;
export type addItem= (item: Item) => void

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {id: 1, product: 'Pen', price: 2},
    {id: 2, product: 'Book', price: 10},
  ]);

  const deleteItem: DeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const addItem:addItem = (item) => {
    const updatedItems = [...items];
    item.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    updatedItems.push(item);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Product List React App</h1>
      <div className="table">
        <Items items={items} del={deleteItem}/>
        <AddItem add={addItem}/>
        <Total items={items}/>
      </div>
    </div>
  );
};

export default App;
