import { OverlayTrigger, Tooltip } from "react-bootstrap";

function HelpText({ text, tooltip }) {
  return (
    <OverlayTrigger placement={"right"} overlay={<Tooltip>{tooltip}</Tooltip>}>
      <span style={{"textDecoration": "underline 0.5px gray dashed"}}>{text}</span>
    </OverlayTrigger>
  )
}

export default HelpText;