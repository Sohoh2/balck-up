import {
  Table,
  Button,
  Input,
  Row,
  Col,
  InputGroup,
  Label,
  Form,
} from 'reactstrap';
import commonStyles from '../../../common/css/common.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../common/util/container';

const Presenter = (props) => {
  const { userInfo = [] } = props;

  return (
    <Container>
      <React.Fragment>
        <Container>
          <h2>MyPage</h2>

          <Table bordered>
            <tbody>
              <tr>
                <th scope="row">User ID</th>
                <td>{userInfo.id}</td>
              </tr>
              <tr>
                <th scope="row">Password</th>
                <td>{userInfo.password}</td>
              </tr>
              <tr>
                <th scope="row">phone</th>
                <td>{userInfo.phone}</td>
              </tr>
              <tr>
                <th scope="row">name</th>
                <td>{userInfo.name}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>{userInfo.address}</td>
              </tr>
              <tr>
                <th scope="row">Date joined</th>
                <td>{userInfo.register_at}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </React.Fragment>
    </Container>
  );
};

export default Presenter;
