import { Container, Row, Col } from "react-bootstrap";
import ed from "../assets/img/ed.jpeg";
import "../assets/css/home.css";

function Home() {

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <img src={ed} alt="Ed Murphy" className="portrait" />
          <div className="text-center"><a href="mailto:kem528@outlook.com">Contact</a></div>
        </Col>
        <Col lg={9}>
          <h2>Ed Murphy</h2>
          <b>About Me</b>
          <p>I have been retired from a corporate career, primarily with SAIC, since 2012. I was the lead financial person of the aerospace arm of the company through 1992 and subsequently engaged in and managed the Mergers & Acquisitions activities of the company until my retirement. Currently, I am an adjunct professor of finance with the Fermanian School of Business at Point Loma Nazarene University in San Diego, teaching Investments and incorporating practical personal/life finance topics into the course. I am a graduate of Georgetown University with a double-major in Finance and Accounting and received an MBA from Pepperdine University. I serve as a Board member of Workshops for Warriors (non-profit veterans training organization that truly deserves your support), member and current chair of city of Solana Beach Budget & Finance Commission and provide occasional personal finance and investment advisory services (mostly pro bono). I also provide corporate finance/merger & acquisition/valuation advisory services on a very limited basis (hey, I’m retired!).</p>
          <p>I can be found on a trail or mountain, hiking (tagging along) with my very accomplished mountaineering wife, on a golf course with friends (I’m the one who only infrequently uses the fairway), on my bike, dodging motorized vehicles with only modest success, and visiting my Georgetown friends with whom I continue to create great memories. I have two great kids who think this personal finance stuff is worth learning.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;