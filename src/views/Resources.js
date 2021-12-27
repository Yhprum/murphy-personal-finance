import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourcePreview from "../components/ResourcePreview";
import "../assets/css/Resources.css";

function Resources() {
  return (
    <Container>
      <Row>
        <Col>
          <ResourcePreview
            title="Retirement Calculator"
            description="How much will I have saved in the future for retirement if I start now?"
            path="retirement"
          />
        </Col>
        <Col>
          <ResourcePreview
            title="Loan Calculator"
            description="How much is my monthly loan/mortgage payment? How will points affect the amount I pay?"
            path="loans"
          />
        </Col>
        <Col>
          <ResourcePreview
            title="Savings Calculator"
            description="How much do I need to save/invest now to make a certain goal in the future assuming a certain rate of return?"
            path="save"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Resources;