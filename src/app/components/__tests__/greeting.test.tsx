import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Greeting from "../greeting";

describe("<Greeting />", () => {
  it("should render", () => {
    render(<Greeting greetings={["Hi", "Hello", "Hey"]} />);
    expect(
      screen.getByText((content) => content.includes("I'm"))
    ).toBeDefined();
  });

  it("should showw Hi in the first render", () => {
    render(<Greeting greetings={["Hello"]} />);
    expect(
      screen.getByText((content) => content.includes("Hello"))
    ).toBeDefined();
  });
});
