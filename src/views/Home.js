import { Container, Row, Col } from "react-bootstrap";
import ed from "../assets/img/ed.jpeg";
import cv from "../assets/Murphy CV_SP 21.pdf";
import "../assets/css/home.css";

function Home() {

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <img src={ed} alt="Ed Murphy" className="portrait" />
          <div className="text-center"><a href="mailto:kmurphy1@pointloma.edu">Contact</a></div>
          <div className="text-center"><a href={cv} download="Murphy CV_SP 21.pdf">Download CV</a></div>
        </Col>
        <Col lg={9}>
          <h2>Ed Murphy, MBA</h2>
          <b>Adjunct Professor of Finance, PLNU</b>
          <p>Ed Murphy joined the Fermanian School of Business (FSB) in 2019 as an adjunct professor of finance. He worked for over 30 years in the corporate world, primarily focused on corporate finance/accounting. As Senior Vice-President of Strategic Transactions, he headed the mergers and acquisitions (M&A) department at SAIC and led over $3 billion in transactions, overseeing valuation, negotiation & integration activities. Prior to that, as Corporate Vice-President, he was the senior financial & accounting manager of the aerospace segment of SAIC. Since joining PLNU, he has taught Investments and Business Finance while incorporating practical personal/life finance topics. Ed graduated from Georgetown University with a double-major in Finance and Accounting and received his MBA from Pepperdine University. He serves as Treasurer and a Board member of Workshops for Warriors (non-profit training entity), member and current chair of Solana Beach Budget & Finance Commission and provides occasional pro bono personal finance and investment advisory services. He also provides corporate finance/merger & acquisition advisory services on a limited basis.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;