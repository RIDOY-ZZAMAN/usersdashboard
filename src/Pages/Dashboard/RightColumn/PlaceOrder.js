import React, { useEffect, useState } from 'react';

const PlaceOrder = ({ item, items, setItems }) => {
    const [productsName, setProductsName] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProductsName(data))
    }, [])
    const discounts = ['Flat', 'High'];
    const [selected, setSelected] = useState();
    const [selecteddiscount, setSelectedDiscount] = useState();
    const handleComponentsRemove = (item, e) => {
        e.preventDefault();
        console.log(item);
        const index = items.indexOf(item);
        console.log("Before items", items)
        if (index > -1) {
            items.splice(index, 1);
        }
        console.log("After items", items)
        setItems([...items])
    }
    return (
        <div>
            <div className='mt-3 d-flex justify-content-between shadow-sm p-3  bg-body rounded-2' >
                <div class="dropdown">
                    <button style={{ width: "130px" }} class="btn border-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        {selected} &nbsp;
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        {productsName.map(product => <li>
                            <button onClick={e => {
                                setSelected(product.productName)
                            }
                            }
                                class="dropdown-item"
                                type="button">
                                {product.productName}
                            </button>
                        </li>)}
                    </ul>
                </div>
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
                <div class="dropdown">
                    <button style={{ width: "130px" }} class="btn border-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        {selecteddiscount} &nbsp;
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        {
                            discounts.map(discount =>
                                <li>
                                    <button onClick={e =>
                                        setSelectedDiscount(discount)}
                                        class="dropdown-item"
                                        type="button">
                                        {discount}
                                    </button>
                                </li>
                            )

                        }
                    </ul>
                </div>
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
            </div>

        </div>
    );
};

export default PlaceOrder;