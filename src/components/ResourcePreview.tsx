import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

interface Props {
  title: string;
  description: string;
  path: "retirement" | "loans" | "save" | "earn" | "later" | "howlong";
}
function ResourcePreview({ title, description, path }: Props) {
  return (
    <Link className="no-deco" href={"resources/" + path}>
      <Card className="resource-card">
        <img src={"/img/" + path + ".png"} alt={path} />
        <b className="mt-auto">{title}</b>
        <div>{description}</div>
      </Card>
    </Link>
  );
}

export default ResourcePreview;
