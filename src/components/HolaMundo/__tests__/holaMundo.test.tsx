import React from "react";
import { render } from "@testing-library/react";
import HolaMundo from "../HolaMundo";

test("loads and displays greeting", async () => {
  // Arrange
  const greetingMsg = "Hola Mundo";
  const { findByText } = render(<HolaMundo msg={greetingMsg} />);
  // Act
  // Assert
  const outputtedMsg = await findByText(greetingMsg);
  expect(outputtedMsg).not.toBeNull();
});
