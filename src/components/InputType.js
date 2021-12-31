import { FormControl, InputGroup } from "react-bootstrap";

function InputType({ type, value, onChange, disabled }) {
  return (
    <InputGroup>
      {type === "dollar" ? <InputGroup.Text>$</InputGroup.Text> : null}
      <FormControl
        disabled={disabled}
        type="number"
        step={type === "percent" ? 0.1 : 1}
        value={type === "percent" ? value.toFixed(2) : value}
        onChange={onChange}
      />
      {type === "percent" ? <InputGroup.Text>%</InputGroup.Text> : null}
    </InputGroup>
  )
}

export default InputType;