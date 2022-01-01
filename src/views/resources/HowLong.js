import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { NPER } from "../../utils";
import InputType from "../../components/InputType";

function HowLong() {
  const [values, setValues] = useState({
    fv: 50000,
    pv: 20000,
    rate: 6.5,
    pmt: 0,
    compounding: 4
  });

  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  let nper = NPER(values.rate / 100 / values.compounding, -values.pmt / values.compounding, -values.pv, values.fv) / values.compounding;

  return (
    <Container>
      <h3 className="text-center">How Long Will It Take</h3>
      <b>How long will it take to attain a certain amount in the future if I invest a certain amount now at a certain rate?</b>
      <Form>
        <Form.Group as={Row} className="mb-1" controlId="fv">
          <Form.Label column sm={8}>
            Amount I will need in the future
          </Form.Label>
          <Col sm={4}>
            <InputType type="dollar" value={values.fv} onChange={changeHandler} />
          </Col>
        </Form.Group>
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
        <Form.Group as={Row} className="mb-1" controlId="pmt">
          <Form.Label column sm={8}>
            Additional amount deposited annually
          </Form.Label>
          <Col sm={4}>
            <InputType type="dollar" value={values.pmt} onChange={changeHandler} />
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
          How long will it take?
        </Col>
        <Col sm={4}>
          {nper.toFixed(1)} years
        </Col>
      </Row>
    </Container>
  );
}

export default HowLong;