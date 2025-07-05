import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CountryPage from "./page";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  redirect: jest.fn(),
}));

jest.mock("next-auth", () => ({
  getServerSession: jest.fn(),
}));
jest.mock("@/app/api/auth/[...nextauth]/route", () => ({}));
jest.mock("@/lib/db", () => ({}));

describe("CountryPage", () => {
  it("renders the country page", () => {
    render(<CountryPage params={{
        country: ""
    }} />);
    expect(screen.getByText("Hello, Country!")).toBeInTheDocument();
  });
});