import React, { useState } from 'react';
import PlaceOrder from './PlaceOrder';
import './RigntColumn.css'

const RightColumn = () => {
    const [items, setItems] = useState([0])
    console.log(items)
    const handleComponetsAdd = (e) => {
        e.preventDefault();
        setItems([...items, items.length]);

    }

    return (
        <div className='container'>
            <h5 className='text-primary text-center my-2'>Add Products of Customer Choice</h5>
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
                {items.map((item, idx) => <PlaceOrder item={item} idx={idx} items={items} setItems={setItems} ></PlaceOrder>
                )}
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