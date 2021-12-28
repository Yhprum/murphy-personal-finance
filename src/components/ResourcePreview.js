import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import retirement from "../assets/img/retirement.png";
import loans from "../assets/img/loans.png";
import save from "../assets/img/save.png";
import earn from "../assets/img/earn.png";
import later from "../assets/img/later.png";
import howlong from "../assets/img/howlong.png";

function ResourcePreview({ title, description, path }) {
  let navigate = useNavigate();
  let previews = { retirement, loans, save, earn, later, howlong };
  return (
    <Card className="resource-card" onClick={() => navigate(path)}>
      <img src={previews[path]} alt={path} />
      <b className="mt-auto">{title}</b>
      <div>{description}</div>
    </Card>
  );
}

export default ResourcePreview;