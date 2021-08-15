import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import navigationLogoImg from '../../common/assets/img/navigation/navigationLogo.png';
const Presenter = (props) => {
  const { menuList = [] } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={navigationLogoImg} className="navigationLogoImg" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar className="navigationMenu">
                <DropdownToggle nav caret>
                  MADE
                </DropdownToggle>
                <DropdownMenu right>
                    {/* <Link className="navigationMenuItem" to="/made">
                      {menuList.data[0].cate_name}
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="navigationMenuItem" to="/made">
                      {menuList.data[1].cate_name}
                    </Link>        */}
                    {menuList.map((data,idx) =>(
                    <DropdownItem>                     
                        <Link className="navigationMenuItem" to={`/made/${data.cate_id}`}>
                            {data.cate_name}
                        </Link>
                    </DropdownItem>

                    ))
                    }
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="navigationMenu">
                  내정보
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link className="navigationMenuItem" to="/signIn">
                      LOGIN
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="navigationMenuItem" to="/signUp">
                      JOIN
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="navigationMenuItem" to="/signUp">
                      MY PAGE
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link
                      className="navigationMenuItem"
                      onClick={() => {
                        localStorage.clear();
                      }}
                      to="/signIn"
                    >
                      Logout
                    </Link>{' '}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
     
    </>
  );
};

export default Presenter;
