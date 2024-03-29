"use client";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { NPER } from "@/lib/utils";
import InputType from "@/components/InputType";
import HelpText from "@/components/HelpText";
import { compoundingText, lumpSumText, pmtText, rateText } from "@/assets/text/tooltips";

export default function HowLong() {
  const [values, setValues] = useState({
    fv: 50000,
    pv: 20000,
    rate: 6.5,
    pmt: 0,
    compounding: 4,
  });

  const changeHandler = (e: any) => setValues({ ...values, [e.target.id]: parseFloat(e.target.value) });

  const nper =
    NPER(values.rate / 100 / values.compounding, -values.pmt / values.compounding, -values.pv, values.fv) ?? 0 / values.compounding;

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
            <HelpText text="Amount I will invest now" tooltip={lumpSumText} />
          </Form.Label>
          <Col sm={4}>
            <InputType type="dollar" value={values.pv} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="rate">
          <Form.Label column sm={8}>
            <HelpText text="Return I expect to earn annually on invested amount (%)" tooltip={rateText} />
          </Form.Label>
          <Col sm={4}>
            <InputType type="percent" value={values.rate} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1" controlId="pmt">
          <Form.Label column sm={8}>
            <HelpText text="Additional amount deposited annually" tooltip={pmtText} />
          </Form.Label>
          <Col sm={4}>
            <InputType type="dollar" value={values.pmt} onChange={changeHandler} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="compounding">
          <Form.Label column sm={8}>
            <HelpText text="Interest payment/compounding periods per year" tooltip={compoundingText} />
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" value={values.compounding} onChange={changeHandler} />
          </Col>
        </Form.Group>
      </Form>
      <Row>
        <Col sm={8}>How long will it take?</Col>
        <Col sm={4}>{nper.toFixed(1)} years</Col>
      </Row>
    </Container>
  );
}
