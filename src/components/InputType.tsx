import { FormControl, InputGroup } from "react-bootstrap";

interface Props {
  type?: string;
  value: number;
  onChange?: (e: any) => void;
  disabled?: boolean;
}
function InputType({ type, value, onChange, disabled }: Props) {
  return (
    <InputGroup>
      {type === "dollar" ? <InputGroup.Text>$</InputGroup.Text> : null}
      <FormControl
        disabled={disabled}
        type="number"
        step={type === "percent" ? 0.1 : 1}
        value={type === "percent" ? value.toFixed(2) : value.toFixed(2)}
        onChange={onChange}
      />
      {type === "percent" ? <InputGroup.Text>%</InputGroup.Text> : null}
    </InputGroup>
  );
}

export default InputType;
