import React, { useState } from 'react';
import './RigntColumn.css'


const RightColumn = () => {
    const [items, setItems] = useState([0])
    const handleComponetsAdd = (e) => {
        e.preventDefault();
        setItems([...items, items.length]);
    }

    const handleComponentsRemove = (item, e) => {
        e.preventDefault();
        const restItems = items.filter(i => i !== item)
        setItems(restItems)
    }

    return (
        <div className='container'>
            <h5 className='text-primary text-center'>Add Products of Customer Choice</h5>
            <div className='d-flex justify-content-between'>
                <h6>Product Name*</h6>
                <h6>Product Pricing</h6>
                <h6>Order Quantity</h6>
                <h6>Order Unit* </h6>
                <h6>Discounted Price*</h6>
                <h6>Discout Type*</h6>
                <h6 >Final Price</h6>
                <h6> </h6>
            </div>

            <form action="">
                {items.map(item => <div className='mt-3 d-flex justify-content-between shadow-sm p-3  bg-body rounded-2' >
                    <input
                        className='inputFieldSize'
                        type="text"
                        placeholder='Country Chicken'
                    />
                    <input
                        className='inputFieldSize'
                        type="text"
                        placeholder='330.00'
                    />
                    <input
                        className='inputFieldSize'
                        type="text"
                        placeholder='100'
                    />
                    <input
                        className='inputFieldSize'
                        type="text"
                        placeholder='KG'
                    />
                    <input
                        className='inputFieldSize'
                        type="text"
                        placeholder='Enter Discount'
                    />
                    <input
                        className='inputFieldSize'
                        type="text"
                        placeholder='Flat'
                    />
                    <input
                        className='inputFieldSize'
                        type="text"
                        placeholder='3000'
                    />
                    <button
                        onClick={e => handleComponentsRemove(item, e)}
                        className='border-0'>
                        <i class="fas fa-times"></i>
                    </button>
                </div>)
                }
                <button
                    onClick={e => handleComponetsAdd(e)}
                    type='button'
                    className='my-3 rounded-pill px-5'
                ><i class="fas fa-plus-circle"></i> Add</button>
            </form>
        </div>
    );
};

export default RightColumn;