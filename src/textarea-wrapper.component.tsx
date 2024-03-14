import {TextareaAutosize} from "@mui/base";
import {ChangeEvent} from "react";

const TextareaWrapperComponent = ({value, onChange}: {value: string, onChange: (_event: ChangeEvent<HTMLTextAreaElement>) => void}) => {
  return <TextareaAutosize value={value} onChange={onChange}/>;
};

export default TextareaWrapperComponent;
