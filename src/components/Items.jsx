import React, { useState } from 'react';
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { FaSort } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Items = ({ items, setAdd, setItems, setFormData, setEditOrAdd }) => {
    const [filterCategory,setFilterCategory]=useState("All");
    const [sortOrder,setSortOrder]=useState("none")

    const deleteItem = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    const editItem = (id) => {    
        const itemToEdit = items.find((item) => item.id === id);
        setFormData({ ...itemToEdit });
        setAdd(true); 
        setEditOrAdd("edit");
    };

    const filterItems=filterCategory==="All"?items:items.filter((item)=>item.category===filterCategory);
    const sortItems=filterItems.sort((a,b)=>{
        if(sortOrder==="asc"){  
            return a.quantity-  b.quantity;
        }else if(sortOrder==="dsc"){
            return b.quantity - a.quantity;
        }else{
            return 0
        }
    })

    const sortToggle=()=>{
        if(sortOrder==='asc'){
            setSortOrder("dsc")
        }else{
            setSortOrder("asc");
        }
        console.log(sortOrder)
    }

  return (
    <div className='flex flex-col p-3 justify-center items-center text-lg w-full text-center'>
      <div className='w-full flex justify-end'>



        {/* add button */}



        <button 
          onClick={() => { setAdd(true); setEditOrAdd("add"); }} 
          className=' bg-[#8ACB88] flex justify-center items-center gap-2 text-2xl px-6 rounded-xl font-semibold py-1 hover:bg-gray-400 hover:shadow-lg'>
          <IoMdAdd /> Add Item
        </button>
        

      </div>
      <div className='w-full flex font-bold'>
          <div className='grid grid-cols-[10%,45%,35%,15%] p-2 w-[85%] rounded-lg'>
            <p className=' px-5 py-2'>ID</p>
            <p className=' px-5 py-2'>Name</p>
            <p className='px-5 py-2'>Category

                <select className='border text-center p-1 rounded-lg ml-4 bg-[#575761]'
                    value={filterCategory}
                    onChange={(e)=>{setFilterCategory(e.target.value)}} 
                >
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>

                    
                </select>

            </p>
            <p className=' px-5 py-2 flex justify-center items-center gap-3'>Quantity <button onClick={sortToggle} > <FaSort /></button> </p>
          </div>
         
        </div>
        <div className='w-full flex flex-col gap-4 '>
            {sortItems.map((item, index) => (
                <div key={index} className={`w-full flex justify-between border rounded-lg ${item.quantity<10?"bg-red-300 text-red-800":"bg-[#648381]"}`}>
                    <div className='grid grid-cols-[10%,45%,35%,10%]  w-[85%]'>
                        <p className=' px-5 py-2'>{item.id}</p>
                        <p className=' px-5 py-2'>{item.name}</p>
                        <p className=' px-5 py-2'>{item.category}</p>
                        <p className=" px-5 py-2">{item.quantity}</p>
                    </div>
                    <div className='grid grid-cols-2 p-2'>
                        <p className='flex justify-center items-center border px-5 py-2'>
                        <button onClick={() => editItem(item.id)}><MdOutlineEdit /></button>
                        </p>
                        <p className='flex justify-center items-center border px-5 py-2'>
                        <button onClick={() => deleteItem(item.id)}><MdDelete /></button>
                        </p>
                    </div>
                </div>
        ))}
        </div>
      
    </div>
  );
};

export default Items;
