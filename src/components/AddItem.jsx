import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const AddItem = ({ setItems,add, items, setAdd, formData, editOrAdd, setFormData }) => {

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        if (editOrAdd === 'edit') {
        const updatedItems = items.map(item =>
            item.id === formData.id
            ? { ...item, name: formData.name, category: formData.category, quantity: formData.quantity }
            : item
        );
        setItems(updatedItems);
        setFormData({ name: "", category: "", quantity: "", id: null });
        setAdd(false); 
        } else {
        const newItem = {
            id: items.length + 1,
            name: formData.name,
            category: formData.category,
            quantity: formData.quantity,
        };
        setItems([...items, newItem]);
        setFormData({ name: "", category: "", quantity: "" });
        setAdd(false); 
        }
    };

  return (
    <div className='flex flex-col w-full text-xl text-black p-4 justify-center items-center '>
        <button className='fixed top-2 text-4xl right-4' onClick={()=>{if(add===true){setAdd(false)}}} ><IoMdCloseCircleOutline /></button>
      <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center gap-4'>
        <input
          className='border px-3 py-2 rounded-2xl w-[80%]'
          placeholder='Name'
          onChange={handleChange}
          type='text'
          name='name'
          id='name'
          value={formData.name}
          required
        />


        <select className='border px-3 py-2 rounded-2xl w-[80%]'
            id='category'
            name='category'
            value={formData.category}
            required
            onChange={handleChange}
        >
            <option value="All">All</option>
            <option value="Fruit">Fruits</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>

            


        </select>

        <input
          className='border px-3 py-2 rounded-2xl w-[80%]'
          placeholder='Quantity'
          onChange={handleChange}
          type='number'
          id='quantity'
          name='quantity'
          value={formData.quantity}
          required
        />

        <button type='submit' className='rounded-xl px-5 py-2 border w-[12rem]'>
          {editOrAdd === "add" ? "Add Item" : "Update Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
