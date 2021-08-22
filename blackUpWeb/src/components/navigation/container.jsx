import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {

  const [menuList, setMenuList] = useState([]);
  const [accessToken, setAccessToken] = useState(false)
  
  console.log('토큰???????',localStorage.getItem('accessToken'))


  useEffect(() => {
    menuListFetch();

    if(localStorage.getItem('accessToken')){
      setAccessToken(true);
    }
  }, [accessToken]);

  const menuListFetch = () => {
    axios
      .get('http://localhost:8080/prod/category')
      .then((response) => response)
      .then((res) => {
        setMenuList(res.data.data);
      }) 
      .catch((error) => console.log('error', error));
  };

  return <Presenter {...props}
   menuList={menuList} 
   setMenuList={setMenuList}
   accessToken={accessToken}
    />;
};

export default Container;
