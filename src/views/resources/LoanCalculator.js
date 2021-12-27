import React, { Fragment, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LoanCalculatorForm from "../../components/LoanCalculatorForm";

function LoanCalculator() {
  const [comparisons, setComparisons] = useState(0);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <LoanCalculatorForm title="Loan A - A Basic Monthly Loan/Mortgage Calculator (PMT fct) - No Points" />
          <hr/>
          <LoanCalculatorForm title="Loan B - A Basic Monthly Loan/Mortgage Comparison w/Points (PMT & RATE fct)" rate={.0275} points={.01} />
          <hr/>
          <LoanCalculatorForm title="Loan C - A Basic Monthly Loan/Mortgage Comparison w/Points (PMT & RATE fct)" rate={.025} points={.02} />
          <hr/>
          {[...Array(comparisons)].map((_, i) =>
            <Fragment key={i}>
              <LoanCalculatorForm title={`Loan ${String.fromCharCode(68 + i)} - A Basic Monthly Loan/Mortgage Comparison w/Points (PMT & RATE fct)`} points={.01} />
              <hr/>
            </Fragment>
          )}
          <Button variant="outline-secondary" onClick={() => setComparisons(c => c + 1)}>+ Add Comparison</Button>
        </Col>
        <Col lg={6}>
          <h3>How much is my monthly loan payment (can be used for any amortizing loan type)?</h3>
          <p>This excludes loan documentation costs that can run $3,000-$6,000.</p>
          <p>Mortgage insurance (benefits the lender) and property tax impounds are not included. You would prefer to pay property taxes separately and not pay mortgage insurance in most cases.</p>
          <p>Points lower the interest rate; the more points you pay, the lower the rate on your loan.</p>
          <p>Points are equivalent to prepaid interest, where the lender is &quot;betting&quot; that you will refinance your loan or sell your house before the &quot;points breakeven&quot; point.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default LoanCalculator;