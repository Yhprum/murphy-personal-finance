import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { currency, PV, PMT } from "../../utils";

function Save() {
  const [values, setValues] = useState({
    fv: 50000,
    rate: 0.065,
    nper: 10,
    compounding: 1,
    pvAdd: 20000,
    fvAdd: 50000,
    nperAdd: 10,
    rateAdd: 0.065,
    compoundingAdd: 1
  });

  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  let pv = -PV(values.rate / values.compounding, values.nper * values.compounding, 0, values.fv);
  let pmt = -PMT(values.rateAdd / values.compoundingAdd, values.nperAdd * values.compoundingAdd, -values.pvAdd, values.fvAdd) * values.compoundingAdd;

  return (
    <Container>
      <b>How much do I need to save/invest now to make a <u>certain goal</u> in the future assuming a <u>certain rate of return?</u></b>
      <Form>
        <Form.Group as={Row} className="mb-1" controlId="fv">
          <Form.Label column sm={8}>
            Amount I need in the future (goal)
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.fv} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="rate">
          <Form.Label column sm={8}>
            Amount I expect to earn annually
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" step={.01} value={values.rate} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="nper">
          <Form.Label column sm={8}>
            Years until I need the money
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.nper} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="compounding">
          <Form.Label column sm={8}>
            Interest payment/compounding periods per year
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.compounding} onChange={changeHandler} />
          </Col>
        </Form.Group>
      </Form>
      <Row>
        <Col sm={8}>
          How much do I need to invest now?
        </Col>
        <Col sm={4}>
          {currency(pv)}
        </Col>
      </Row>
      <hr/>
      <b>What is the fixed amount I have to add each year in addition to the initial amount if I have a fixed interest rate estimate?</b>
      <Form>
        <Form.Group as={Row} className="mb-1" controlId="pvAdd">
          <Form.Label column sm={8}>
            Amount I will invest now
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.pvAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="fvAdd">
          <Form.Label column sm={8}>
            Amount I need in the future
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.fvAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="nperAdd">
          <Form.Label column sm={8}>
            Years until I need the money
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.nperAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="rateAdd">
          <Form.Label column sm={8}>
            Amount I expect to earn annually
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" step={.01} value={values.rateAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="compounding">
          <Form.Label column sm={8}>
            Interest payment/compounding periods per year
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.compounding} onChange={changeHandler} />
          </Col>
        </Form.Group>
      </Form>
      <Row>
        <Col sm={8}>
          Additional amount needed to be deposited annually
        </Col>
        <Col sm={4}>
          {currency(pmt)}
        </Col>
      </Row>
    </Container>
  );
}

export default Save;