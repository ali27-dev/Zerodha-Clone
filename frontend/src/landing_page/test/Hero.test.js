import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expectq1";
import Hero from "../home/Hero";

// test suite
describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getAllByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "Assets/images/homeHero.png");
  });
});
