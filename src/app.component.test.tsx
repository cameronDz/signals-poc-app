import React, {ReactElement} from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import AppComponent from "./app.component";
import {AppContext, AppContextValue} from "./app.context";


const customRender = (
  ui: ReactElement,
  contextValue = { contextDescription: "context description"} as AppContextValue,
) => {
  return render(<AppContext.Provider value={contextValue}>{ui}</AppContext.Provider>);
};

describe("App Component", () => {
  it("context has description", async() => {
    customRender(<AppComponent />);
    expect(await screen.findByText("CONTEXT: context description")).toBeInTheDocument();
  });

  it("signal has description", async() => {
    customRender(<AppComponent />);
    expect(await screen.findByText("SIGNAL: context description")).toBeInTheDocument();
  });

  it("changing text field updates signal", async() => {
    customRender(<AppComponent />);

    expect(await screen.findByText("SIGNAL: context description")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Hello from Test" } });
    expect(await screen.findByText("SIGNAL: Hello from Test")).toBeInTheDocument();
  });

  it("changing text field does NOT updates context", async() => {
    customRender(<AppComponent />);

    expect(await screen.findByText("SIGNAL: context description")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Hello from Test" } });
    expect(await screen.findByText("CONTEXT: context description")).toBeInTheDocument();
  });
});
