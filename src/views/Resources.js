import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourcePreview from "../components/ResourcePreview";
import "../assets/css/Resources.css";

function Resources() {
  return (
    <Container>
      <Row className="resources">
        <Col lg={4} md={6}>
          <ResourcePreview
            title="Retirement/Savings Calculator"
            description="How much will I have saved in the future for my retirement/goal if I start now?"
            path="retirement"
          />
        </Col>
        <Col lg={4} md={6}>
          <ResourcePreview
            title="Loan Calculator"
            description="How much is my monthly loan/mortgage payment? How will points affect the amount I pay?"
            path="loans"
          />
        </Col>
        <Col lg={4} md={6}>
          <ResourcePreview
            title="Savings Calculator"
            description="How much do I need to save/invest  now to make a certain goal in the future assuming a certain rate of return?"
            path="save"
          />
        </Col>
        <Col lg={4} md={6}>
          <ResourcePreview
            title="Earnings Need Calculator"
            description="How much will I have to earn on investments if I save/invest now and want a certain amount in the future?"
            path="earn"
          />
        </Col>
        <Col lg={4} md={6}>
          <ResourcePreview
            title="Future Value Calculator"
            description="How much will I have in the future if I save/invest a certain amount now and earn a certain interest/income rate?"
            path="later"
          />
        </Col>
        <Col lg={4} md={6}>
          <ResourcePreview
            title="How Long Will It Take"
            description="How long will it take to attain a certain amount in the future if I invest a certain amount now at a certain rate?"
            path="howlong"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Resources;