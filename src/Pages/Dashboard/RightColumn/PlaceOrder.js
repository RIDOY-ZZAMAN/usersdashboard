import React, { useEffect, useState } from 'react';

const PlaceOrder = ({ item, items, setItems, idx }) => {
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState();
    const [FinalPrice, setFinalPrice] = useState()
    const discounts = ['Flat', 'High'];
    const [selected, setSelected] = useState();
    const [selecteddiscount, setSelectedDiscount] = useState();
    const handleComponentsRemove = (idx, e) => {
        e.preventDefault();
        document.getElementById(`id-${idx}`).remove();
    }

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const productQuantity = 10;

    const finalPrice = (quantity, price) => {

        setFinalPrice(quantity * price)



    }


    return (
        <div>
            <div id={`id-${idx}`} className='mt-3 d-flex justify-content-between shadow-sm p-3  bg-body rounded-2' >
                <div class="dropdown">
                    <button style={{ width: "130px" }} class="btn border-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        {selected} &nbsp;
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        {products.map(product => <li>
                            <button onClick={() => {
                                setSelected(product.productName);
                                setPrice(product.price);
                                finalPrice(productQuantity, product.price)


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
                    value={price}
                />
                <input
                    className='inputFieldSize'
                    type="text"
                    value={productQuantity}
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
                    value={FinalPrice}
                />
                <button
                    onClick={(e) => handleComponentsRemove(idx, e)}
                    className='border-0'>
                    <i class="fas fa-times"></i>
                </button>
            </div>

        </div>
    );
};

export default PlaceOrder;