import React, { useState } from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import {FV, currency} from "../../utils";

function RetirementCalculator() {

  const [values, setValues] = useState({
    lumpSum: 5000,
    rate: 0.08,
    annualContributions: 2400,
    targetDrawAge: 66,
    compounding: 1,
    age: 21
  });

  const [years, setYears] = useState(5);

  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  const ages = [20, 25, 30, 35, 40, 45, 50, 55];

  return (
    <Container>
      <Row>
        <Col>
          Variables
          <Form>
            <Form.Group as={Row} className="mb-1" controlId="lumpSum">
              <Form.Label column sm={8}>
                Lump Sum Invested Now
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" value={values.lumpSum} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="rate">
              <Form.Label column sm={8}>
                Invested Rate
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" step={.01} value={values.rate} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="annualContributions">
              <Form.Label column sm={8}>
                Annual Contributions
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" value={values.annualContributions} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="targetDrawAge">
              <Form.Label column sm={8}>
                Target Retirement Age
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" value={values.targetDrawAge} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="age">
              <Form.Label column sm={8}>
                Your Age
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" value={values.age} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="compounding">
              <Form.Label column sm={8}>
                Compounding
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" min={1} max={365} value={values.compounding} onChange={changeHandler} />
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          results
          <Table>
            <thead>
              <tr>
                <th/>
                <th>Starting Age</th>
                <th>Results (Future Value)</th>
                <th>Amount Invested</th>
                <th>
                  Growth Past Retirement
                  <select value={years} onChange={e => setYears(parseInt(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                  yrs
                </th>
              </tr>
            </thead>
            <tbody>
            {[values.age, ...ages.filter(age => age > values.age)].map(age => {
              let { lumpSum, rate, annualContributions, targetDrawAge, compounding } = values;
              let nper = (targetDrawAge - age) * compounding;
              let fv = FV(rate / compounding, nper, annualContributions / compounding * -1, lumpSum * -1);
              let amt = parseFloat(lumpSum) + annualContributions * (targetDrawAge - age);
              let growth = FV(rate / compounding, years * compounding, 0, fv * -1);
              return (
                <tr key={age}>
                  <td>{age === values.age ? "you" : null}</td>
                  <td>{age}</td>
                  <td>{currency(fv)}</td>
                  <td>{currency(amt)}</td>
                  <td>{currency(growth)}</td>
                </tr>
              );
            })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default RetirementCalculator;