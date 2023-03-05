import React, { useState, createContext, useContext } from 'react';

export interface Item {
  id: number;
  name: string;
  description: string;
}

export interface ItemContextType {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (itemId: number, updatedItem: Partial<Item>) => void;
  deleteItem: (itemId: number) => void;
}

export const ItemContext = createContext<ItemContextType>({
  items: [{
    id:1245555,
    name:'doron',
    description:'Team Lead Front End'
  }],
  addItem: () => {},
  updateItem: () => {},
  deleteItem: () => {},
});

export const ItemProvider = (props:any) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setItems([...items, newItem]);
  };

  const updateItem = (itemId: number, updatedItem: Partial<Item>) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, ...updatedItem };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const deleteItem = (itemId: number) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const contextValues: ItemContextType = {
    items,
    addItem,
    updateItem,
    deleteItem,
  };

  return (
    <ItemContext.Provider value={contextValues}>
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemContext;