import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { currency, PMT, RATE } from "../utils";
import InputType from "./InputType";

function LoanCalculatorForm({ title, rate, points, letter, pmtNoPoints, setPmt }) {
  const [values, setValues] = useState({
    loanAmount: 350000,
    rate: rate ?? 3,
    term: 30,
    pmtsPerYear: 12,
    points: points ?? 1
  });

  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  let pmt = PMT(values.rate / 100 / values.pmtsPerYear, values.term * values.pmtsPerYear, values.loanAmount * -1);
  if (!points) setPmt(pmt);

  return (
    <Row>
      <Col lg={6}>
        <b>{title}</b>
        <Form>
          <Form.Group as={Row} className="mb-1" controlId="loanAmount">
            <Form.Label column sm={8}>
              Loan Amount
            </Form.Label>
            <Col sm={4}>
              <InputType type="dollar" value={values.loanAmount} onChange={changeHandler} />
            </Col>
          </Form.Group>
          {points ?
            <Form.Group as={Row} className="mb-1" controlId="points">
              <Form.Label column sm={5}>
                Points
              </Form.Label>
              <Col sm={3}>
                <InputType type="percent" value={values.points} onChange={changeHandler} />
              </Col>
              <Col sm={4}>
                <InputType type="dollar" value={values.points / 100 * values.loanAmount} onChange={changeHandler} />
              </Col>
            </Form.Group>
            : null
          }
          <Form.Group as={Row} className="mb-1" controlId="rate">
            <Form.Label column sm={8}>
              Interest Rate
            </Form.Label>
            <Col sm={4}>
              <InputType type="percent" value={values.rate} onChange={changeHandler} />
            </Col>
          </Form.Group>
          {points ?
            <Form.Group as={Row} className="mb-1" controlId="ratePoints">
              <Form.Label column sm={8}>
                Rate With Points
              </Form.Label>
              <Col sm={4}>
                <InputType disabled type="percent" value={RATE(values.term * values.pmtsPerYear, pmt, values.loanAmount * (values.points / 100 - 1)) * 12 * 100} />
              </Col>
            </Form.Group>
            : null
          }
          <Form.Group as={Row} className="mb-1" controlId="term">
            <Form.Label column sm={8}>
              Term
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="number" value={values.term} onChange={changeHandler} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="pmtsPerYear">
            <Form.Label column sm={8}>
              Payments Per Year
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="number" value={values.pmtsPerYear} onChange={changeHandler} />
            </Col>
          </Form.Group>
        </Form>
        <Row>
          <Col sm={8}>
            Loan/Mortgage Payment per Month (P&I only)
          </Col>
          <Col sm={4}>
            {currency(pmt)}
          </Col>
        </Row>
      </Col>
      {points ?
        <Col lg={6}>
          <table>
            <thead>
            <tr>
              <th colSpan={2}>Comparing Loan A (no points) to Loan {letter}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{(values.points / 100 * values.loanAmount / (pmtNoPoints - pmt)).toFixed(1)}</td>
              <td>months to breakeven</td>
            </tr>
            <tr>
              <td>{(values.points / 100 * values.loanAmount / (pmtNoPoints - pmt) / 12).toFixed(1)}</td>
              <td>years to breakeven</td>
            </tr>
            </tbody>
          </table>
        </Col>
        :
        <Col lg={6}>
          <b>Simple Points breakeven analysis (ignoring time value of money)</b>
          <br/>If you think you won't hold the loan past the breakeven time period, take the loan with the higher
          interest rate and no points.
        </Col>
      }
    </Row>
  );
}

export default LoanCalculatorForm;