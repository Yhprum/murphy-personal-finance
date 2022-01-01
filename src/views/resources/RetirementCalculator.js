import React, { useState } from "react";
import { Container, Row, Col, Form, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FV, currency } from "../../utils";
import InputType from "../../components/InputType";

function RetirementCalculator() {

  const [values, setValues] = useState({
    lumpSum: 5000,
    rate: 8,
    annualContributions: 2400,
    targetDrawAge: 66,
    compounding: 1,
    age: 21
  });
  const [years, setYears] = useState(5);
  const ages = [20, 25, 30, 35, 40, 45, 50, 55];
  const changeHandler = e => {
    setValues({...values, [e.target.id]: parseFloat(e.target.value)})
  }

  return (
    <Container>
      <h3 className="text-center">Retirement/Savings Calculator</h3>
      <p>This calculator is intended to give you a snapshot of how your investment balances might grow over time based on starting and ending ages. As the inputs will likely change over the years, you can rerun them and see how you are progressing towards your goals. The output table will show the results based on your current age if you were to start saving now and will also show the results if you were to start later, using fixed five-year intervals.</p>
      <Row>
        <Col>
          Variables
          <Form>
            <Form.Group as={Row} className="mb-1" controlId="lumpSum">
              <Form.Label column sm={8}>
                <OverlayTrigger
                  placement={"right"}
                  overlay={
                    <Tooltip>
                      Enter the amount you have already saved or invested as you start this calculation.
                    </Tooltip>
                  }
                >
                  <span style={{"textDecoration": "underline 0.5px gray dashed"}}>Lump Sum Invested Now</span>
                </OverlayTrigger>
              </Form.Label>
              <Col sm={4}>
                <InputType type="dollar" value={values.lumpSum} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="rate">
              <Form.Label column sm={8}>
                Estimated Average Annual Investment Return %
              </Form.Label>
              <Col sm={4}>
                <InputType type="percent" value={values.rate} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="annualContributions">
              <Form.Label column sm={8}>
                Annual Contributions
              </Form.Label>
              <Col sm={4}>
                <InputType type="dollar" value={values.annualContributions} onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1" controlId="targetDrawAge">
              <Form.Label column sm={8}>
                Target Retirement/Goal Achievement Age
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
                <th>Value at Age {values.targetDrawAge}</th>
                <th>Amount Invested</th>
                <th>
                  Value at{" "}
                  <select value={years} onChange={e => setYears(parseInt(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                  yrs Past Target Age
                </th>
              </tr>
            </thead>
            <tbody>
            {[values.age, ...ages.filter(age => age > values.age)].map(age => {
              let { lumpSum, rate, annualContributions, targetDrawAge, compounding } = values;
              rate = rate / 100;
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