import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/theme-toggle";

describe("ThemeToggle", () => {
  beforeEach(() => localStorage.clear());

  test("toggles theme when clicked", async () => {
    render(<ThemeToggle />);
    const toggleButton = screen.getByRole("button");

    await userEvent.click(toggleButton);
    expect(document.documentElement.classList.contains("dark")).toBeTruthy();

    await userEvent.click(toggleButton);
    expect(document.documentElement.classList.contains("dark")).toBeFalsy();
  });
});
