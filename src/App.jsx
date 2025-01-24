import React, { useState } from 'react';
import { data } from './Data';
import Items from './components/Items';
import AddItem from './components/AddItem';

const App = () => {
  const [add, setAdd] = useState(false);
  const [items, setItems] = useState(data);
  const [formData, setFormData] = useState({ name: "", category: "", quantity: "", id: null });
  const [editOrAdd, setEditOrAdd] = useState("add");

  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
      <div className='flex text-5xl m-4 p-4 justify-center items-center font-bold font-serif '>
        <h1>Inventory Management</h1>
      </div>

      {add && (
        <div className='bg-gray-500 rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border flex justify-center py-10 items-center w-[50%]'>
          <AddItem 
            items={items} 
            setItems={setItems} 
            setAdd={setAdd} 
            formData={formData} 
            editOrAdd={editOrAdd} 
            setEditOrAdd={setEditOrAdd} 
            setFormData={setFormData} 
          />
        </div>
      )}

      <div className='flex justify-center w-[80%] border-[0.5px] rounded-2xl'>
        <Items 
          items={items} 
          setAdd={setAdd} 
          setItems={setItems} 
          setFormData={setFormData} 
          setEditOrAdd={setEditOrAdd} 
        />
      </div>
    </div>
  );
};

export default App;
