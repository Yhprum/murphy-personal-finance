import React, { Fragment, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LoanCalculatorForm from "../../components/LoanCalculatorForm";

function LoanCalculator() {
  const [comparisons, setComparisons] = useState(0);

  return (
    <Container>
      <h3 className="text-center">Loan Calculator</h3>
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
          <h3>How much is my monthly loan/mortgage payment? How will up-front loan points affect the monthly payment? </h3>
          <p>This excludes loan documentation costs that can run $3,000-$6,000 for mortgages and much less (or zero) for other types of loans. Be sure to ask!</p>
          <p>Mortgage insurance (benefits the lender) and property tax impounds (prepaying property taxes) are not included in this calculator, so if you are paying those as part of your loan, that amount would have to be added to the calculated Loan/Mortgage Payment per Month. You would prefer to pay property taxes separately and not pay mortgage insurance in most cases.</p>
          <p>Points lower the interest rate; the more points you pay, the lower the rate on your loan.</p>
          <p>Points are equivalent to prepaid interest, where the lender is &quot;betting&quot; that you will refinance your loan or sell your house before the &quot;points breakeven&quot; point. See the Points Breakeven calculator on this page to see how many years it would take for the loan with points (and a lower interest rate than a “no-points” loan) to be a more attractive option. The calculator does not account for the time value of money, but it is a reasonable approximation).</p>
          <p>If you have your points and/or documentation costs rolled into your loan rather than paid up-front, add them to the Loan Amount and do not include points in your calculator. </p>
        </Col>
      </Row>
    </Container>
  );
}

export default LoanCalculator;