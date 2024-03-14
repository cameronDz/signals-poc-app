import { TextareaAutosize } from "@mui/base";
import {signal} from "@preact/signals";
import {ChangeEvent, useContext, useEffect} from "react";
import {AppContext} from "./app.context";
import "./app.styles.css";
import {useSignals} from "@preact/signals-react/runtime";
import TextareaWrapperComponent from "./textarea-wrapper.component";

const signalDescription = signal("");
const  AppComponent=()=> {
  useSignals();
  const { contextDescription, setContextDescription } = useContext(AppContext);

  // simulate an API call to set the context description
  useEffect(() => {
    setTimeout(() => {
      setContextDescription("Hello from App Component");
    }, 500);
  }, [setContextDescription]);

  // read context into signal once context has state
  useEffect(() => {
    if (!contextDescription) {
      return;
    }
    signalDescription.value =contextDescription;
  }, [contextDescription]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    signalDescription.value = e.target.value;
  };

  return (
    <div className="App">
      <header className="App-header">
        <TextareaWrapperComponent value={signalDescription.value} onChange={handleChange} />
        <p>{`CONTEXT: ${contextDescription}`}</p>
        <p>{`SIGNAL: ${signalDescription}`}</p>
      </header>
    </div>
  );
};

export default AppComponent;
