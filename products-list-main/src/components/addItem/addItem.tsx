import React, {Component, useState} from 'react';

const AddItem = (props) => {
  const [product, setproduct] = useState('')
  const [price, setprice] = useState('')
    
  const newItem = {id:props.items.length+1, product, price}

    

    const handleSubmit = (e) => {
        e.preventDefault()
        props.add(newItem)
        setprice('')
        setproduct('')
    }


        return(
            <div className="item">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={product} placeholder="Enter Product" id="product" onChange={(e) => {setproduct(e.target.value)}} required/>
                    <input type="number" value={price} placeholder="Enter Price" id="price" onChange={(e) => {setprice(e.target.value)}} required/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    
}

export default AddItem;