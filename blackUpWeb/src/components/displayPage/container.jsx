import React, { useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
    const [price, setPrice] = useState('19,000');
    const [description, setDescription] = useState('에이티 썸머 팬츠');
    const [totalPrice, setTotalPrice] = useState('19,000');
    const [qty, setQty] = useState(1);


    return(
        <Presenter {...props}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        qty={qty}
        setQty={setQty}
        />
    
            
    )};

export default Container;