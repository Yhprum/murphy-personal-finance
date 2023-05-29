import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface Props {
  text: string;
  tooltip: string;
}
function HelpText({ text, tooltip }: Props) {
  return (
    <OverlayTrigger placement={"right"} overlay={<Tooltip>{tooltip}</Tooltip>}>
      <span style={{ textDecoration: "underline 0.5px gray dashed" }}>{text}</span>
    </OverlayTrigger>
  );
}

export default HelpText;
