import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
    const [itemDetailInfo, setItemDetailInfo] = useState([])
    const [empty_val, setempty_val] = useState(1);




    useEffect(() => {
      menuListFetch();
      console.log(window.location.pathname)
    }, []);
  
    const menuListFetch = () => {
      axios
        .get("http://localhost:8080/prod/item/1")
        .then((response) => response)
        .then((res) => {
          console.log(res.data.data);
          setItemDetailInfo(res.data.data)
     

        }) 
        .catch((error) => console.log('error', error));
    };


    return(
        <Presenter {...props}
        itemDetailInfo={itemDetailInfo}
        empty_val={empty_val}
        setempty_val={setempty_val}
        />
    
            
    )};

export default Container;