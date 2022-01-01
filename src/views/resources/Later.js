import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FV, currency } from "../../utils";
import InputType from "../../components/InputType";

function Later() {
  const [values, setValues] = useState({
    pv: 20000,
    rate: 6.5,
    nper: 10,
    compounding: 4,
    pvAdd: 20000,
    nperAdd: 10,
    pmtAdd: 1200,
    compoundingAdd: 12
  });

  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  let fv = FV(values.rate  / 100/ values.compounding, values.nper * values.compounding, 0, -values.pv);
  let fvAdd = FV(values.rate / 100 / values.compoundingAdd, values.nperAdd * values.compoundingAdd, -values.pmtAdd / values.compoundingAdd, -values.pvAdd);

  return (
    <Container>
      <h3 className="text-center">Future Value Calculator</h3>
      <b>How much will I have in the future if I save/invest a certain amount now and earn a certain interest/income rate?</b>
      <Form>
        <Form.Group as={Row} className="mb-1" controlId="pv">
          <Form.Label column sm={8}>
            Amount I will invest now
          </Form.Label>
          <Col sm={4}>
            <InputType type="dollar" value={values.pv} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="rate">
          <Form.Label column sm={8}>
            Return I expect to earn annually on invested amount (%)
          </Form.Label>
          <Col sm={4}>
            <InputType type="percent" value={values.rate} onChange={changeHandler} />
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
            <InputType type="dollar" value={values.pvAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="pmtAdd">
          <Form.Label column sm={8}>
            Additional amount deposited annually
          </Form.Label>
          <Col sm={4}>
            <InputType type="dollar" value={values.pmtAdd} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="rateAdd">
          <Form.Label column sm={8}>
            Assumed rate of return (from above)
          </Form.Label>
          <Col sm={4}>
            <InputType disabled type="percent" value={values.rate} />
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