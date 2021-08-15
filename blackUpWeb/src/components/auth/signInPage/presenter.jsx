import { Button, Input,Row, Col, InputGroup, Label, Form } from 'reactstrap';
import { AvForm, AvField } from "availity-reactstrap-validation"
import commonStyles from '../../../common/css/common.css'

import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../common/util/container';
import logo from '../../../common/assets/img/navigation/navigationLogo.png'

const Presenter = (props) => {
    const { id, setId, pwd, setPwd , sendBtn} = props;


    return(
        <Container>
            <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <p className="text-white-50 mb-0">Sign in to continue to BLACK UP.</p>
                    <div className={commonStyles.titleArea}>
                      <h2>Login</h2>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="id"
                          label="ID"
                          value={id}
                          className="form-control"
                          placeholder="Enter email"
                          type="text"
                          required
                          onChange={(e) => setId(e.target.value)}

                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          value={pwd}
                          type="password"
                          required
                          placeholder="Enter Password"
                          onChange={(e) => setPwd(e.target.value)}

                        />
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                          onClick={sendBtn} 
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/page-recoverpw" className="text-muted"><i
                          className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                      </div>
                    </AvForm>

                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>Don't have an account ? <Link to="/signUp"
                  className="fw-medium text-primary"> Signup now </Link> </p>
                <p>© {new Date().getFullYear()} Sunny. Crafted with <i
                  className="mdi mdi-heart text-danger"></i> by BlackUp
                        </p>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
        </Container>    
    )};

export default Presenter;