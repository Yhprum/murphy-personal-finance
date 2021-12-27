import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import retirement from "../assets/img/retirement.png";
import loans from "../assets/img/loans.png";

function ResourcePreview({ title, description, path }) {
  let navigate = useNavigate();
  let previews = { retirement, loans };
  return (
    <Card className="resource-card" onClick={() => navigate(path)}>
      <img src={previews[path]} alt={path} />
      <b className="mt-auto">{title}</b>
      <div>{description}</div>
    </Card>
  );
}

export default ResourcePreview;