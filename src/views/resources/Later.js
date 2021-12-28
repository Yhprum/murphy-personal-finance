import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FV, currency } from "../../utils";

function Later() {
  const [values, setValues] = useState({
    pv: 20000,
    rate: .065,
    nper: 10,
    compounding: 4,
    pvAdd: 20000,
    rateAdd: .065,
    nperAdd: 10,
    pmtAdd: 1200,
    compoundingAdd: 12
  });

  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  let fv = FV(values.rate / values.compounding, values.nper * values.compounding, 0, -values.pv);
  let fvAdd = FV(values.rateAdd / values.compoundingAdd, values.nperAdd * values.compoundingAdd, -values.pmtAdd / values.compoundingAdd, -values.pvAdd);

  return (
    <Container>
      <b>How much will I have in the future if I save/invest a certain amount now and earn a certain interest/income rate?</b>
      <Form>
        <Form.Group as={Row} className="mb-1" controlId="pv">
          <Form.Label column sm={8}>
            Amount I will invest now
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.pv} onChange={changeHandler} />
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
          How much will I have in the future?
        </Col>
        <Col sm={4}>
          {currency(fv)}
        </Col>
      </Row>
      <hr/>
      <b>How much will I have in the future if I also <u>add a fixed amount each year</u> in addition to the above info?</b>
      <Form>
        <Form.Group as={Row} className="mb-1" controlId="pvAdd">
          <Form.Label column sm={8}>
            Amount I will invest now
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.pvAdd} onChange={changeHandler} />
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
        <Form.Group as={Row} className="mb-1" controlId="nperAdd">
          <Form.Label column sm={8}>
            Years until I need the money
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.nperAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="pmtAdd">
          <Form.Label column sm={8}>
            Additional amount deposited annually
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.pmtAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="compoundingAdd">
          <Form.Label column sm={8}>
            Interest payment/compounding periods per year
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.compoundingAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
      </Form>
      <Row>
        <Col sm={8}>
          How much will I have in the future?
        </Col>
        <Col sm={4}>
          {currency(fvAdd)}
        </Col>
      </Row>
    </Container>
  );
}

export default Later;