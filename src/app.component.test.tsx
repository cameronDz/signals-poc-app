import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import AppComponent from "./app.component";
import {AppContextProvider} from "./app.context";

describe("App Component", () => {
  it("context has description", async() => {
    render(
      <AppContextProvider>
        <AppComponent />
      </AppContextProvider>
    );
    expect(await screen.findByText("CONTEXT: Hello from App Component")).toBeInTheDocument();
  });

  it("signal has description", async() => {
    render(
      <AppContextProvider>
        <AppComponent />
      </AppContextProvider>
    );
    expect(await screen.findByText("SIGNAL: Hello from App Component")).toBeInTheDocument();
  });

  it("changing text field updates signal", async() => {
    render(
      <AppContextProvider>
        <AppComponent />
      </AppContextProvider>
    );

    expect(await screen.findByText("SIGNAL: Hello from App Component")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Hello from Test" } });
    expect(await screen.findByText("SIGNAL: Hello from Test")).toBeInTheDocument();
  });

  it("changing text field does NOT updates context", async() => {
    render(
      <AppContextProvider>
        <AppComponent />
      </AppContextProvider>
    );

    expect(await screen.findByText("SIGNAL: Hello from App Component")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Hello from Test" } });
    expect(await screen.findByText("CONTEXT: Hello from App Component")).toBeInTheDocument();
  });
});
