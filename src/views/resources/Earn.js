import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { RATE, percent } from "../../utils";

function Earn() {
  const [values, setValues] = useState({
    pv: 20000,
    fv: 50000,
    nper: 10,
    compounding: 1,
    pvAdd: 20000,
    fvAdd: 50000,
    nperAdd: 10,
    pmtAdd: 1000,
    compoundingAdd: 1
  });

  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  let pv = RATE(values.nper * values.compounding, 0, -values.pv, values.fv) * values.compounding;
  let pvAdd = RATE(values.nperAdd * values.compoundingAdd, -values.pmtAdd / values.compoundingAdd, -values.pvAdd, values.fvAdd) * values.compoundingAdd;

  return (
    <Container>
      <b>How much will I have to earn if I save/invest now and want a certain amount in the future?</b>
      <Form>
        <Form.Group as={Row} className="mb-1" controlId="pv">
          <Form.Label column sm={8}>
            Amount I will invest now
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.pv} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="fv">
          <Form.Label column sm={8}>
            Amount I want in the future (goal)
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.fv} onChange={changeHandler} />
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
          What do I need to earn as a rate of return?
        </Col>
        <Col sm={4}>
          {percent(pv)}
        </Col>
      </Row>
      <hr/>
      <b>How much will I have to earn if I also <u>add a fixed amount each year</u> in addition to the above info until I need the money?</b>
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
            Amount I want in the future (goal)
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
          What do I need to earn as a rate of return?
        </Col>
        <Col sm={4}>
          {percent(pvAdd)}
        </Col>
      </Row>
    </Container>
  );
}

export default Earn;