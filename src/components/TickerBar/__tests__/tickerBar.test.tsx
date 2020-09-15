import React from "react";
import { render } from "@testing-library/react";
import TickerBar from "../TickerBar";

test("loads and displays greeting", async () => {
  // Arrange
  const greetingMsg = "Hola Mundo";
  const { findByText } = render(<TickerBar msg={greetingMsg} />);
  // Act
  // Assert
  const outputtedMsg = await findByText(greetingMsg);
  expect(outputtedMsg).not.toBeNull();
});
