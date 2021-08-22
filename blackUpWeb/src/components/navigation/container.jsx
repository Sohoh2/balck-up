import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    menuListFetch();
  }, []);

  const menuListFetch = () => {
    axios
      .get('http://localhost:8080/prod/category')
      .then((response) => response)
      .then((res) => {
        setMenuList(res.data.data);
      }) 
      .catch((error) => console.log('error', error));
  };

  return <Presenter {...props} menuList={menuList} setMenuList={setMenuList} />;
};

export default Container;
