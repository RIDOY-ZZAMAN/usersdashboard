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
        <div className='container shadow-sm p-2  bg-body rounded   '>
            <div className='border-bottom border-dark'>
                <div className='d-flex align-items-center'>
                    <h4 className='text-primary fw-bold'>Farmer</h4> <i class="fas fa-arrow-right mx-2 mb-2"></i> <span className='text-primary fs-5 mb-2'>Place Order</span>
                </div>
                <p>Lorem Ipsum is simply dummy</p>
            </div>
            <h5 className='text-center my-3 fw-bold'>Add Products of Customer Choice</h5>
            <div className='d-flex justify-content-between px-4'>
                <h6>Product Name*</h6>
                <h6>Product Pricing</h6>
                <h6>Order Quantity</h6>
                <h6>Order Unit* </h6>
                <h6>Discounted Price*</h6>
                <h6>Discout Type*</h6>
                <h6 >Final Price</h6>
                <h6> </h6>
            </div>

            <form action="" className='border-bottom border-dark ps-4 '>
                {items.map((item, idx) => <PlaceOrder item={item} idx={idx} items={items} setItems={setItems} ></PlaceOrder>
                )}
                <button
                    onClick={e => handleComponetsAdd(e)}
                    type='button'
                    className='my-3 rounded-pill px-5'
                ><i class="fas fa-plus-circle"></i> Add</button>
            </form>
            <div className='text-center border-bottom border-dark  '>
                <button type="button" class="btn btn-warning text-light fw-bold my-2 rounded-pill me-5">Process to confirm</button> <span style={{ fontWeight: "bolder", fontSize: "20px" }}>Total<i class="fas fa-rupee-sign text-primary ms-4"></i></span> <span className='text-primary' style={{ fontWeight: "bolder", fontSize: "20px" }}>0000.00</span>

            </div>
            <footer className='text-center '>
                <p style={{ color: 'gray' }}>Aqgromalin Farmtech Services Private Limited &copy; 2022. All right reserved</p>
            </footer>
        </div>
    );
};

export default RightColumn;