import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react'
import "@testing-library/jest-dom";
import DashboardIndexPage from '@/pages/dashboard';


// Test No 1 Start
describe("Test home page", () => {
    it("ensure p.ded-total-investment is present and it contains an value higher than 1b", () => {
      render(<DashboardIndexPage />);
      // const totalInvestmentElement = screen.findByText(/£\d+(\.\d+)?B/);
      const regex = /£\d{1,3}(,\d{3})*(\.\d+)?/;
      const totalInvestmentElement = screen.getByText(regex);
      // Ensure the element is found
      if (totalInvestmentElement) {
        // Get the text content of the element
        const totalInvestmentText = totalInvestmentElement.textContent;
        // Ensure the text content is not null
        if (totalInvestmentText) {
          // Extract the numeric value (remove the pound sign and "B")
          const numericValue = parseFloat(
            totalInvestmentText.replace(/[£B]/g, "")
          );
          // Check if the numeric value is a number
          if (!isNaN(numericValue)) {
            // Check if the numeric value is greater than 1 billion
            expect(numericValue).toBeGreaterThan(1000000000);
          } else {
            // Handle the case where numericValue is NaN
            console.error("Parsed value is NaN");
          }
        } else {
          // Handle the case where totalInvestmentText is null
          console.error("totalInvestmentText is null");
        }
      } else {
        // Handle the case where the element is not found
        console.error('Element with class "ded-total-investment" not found');
      }
    });
});
// Test No 1 ends

// Test No 2 Start
describe("Test Basic Navigation", () => {

    test("finds the link and clicks it", () => {
      render(<DashboardIndexPage />);
      // Find the nav element
    //   const linkText = "How We Do It"; // Use name to search for link
      const navElement = screen.getByRole("navigation");
      // Use within to query inside the nav element
      //   const link = within(navElement).getByRole("link", { name: linkText });
      const links = within(navElement).getAllByRole("link");
      // Check if any link has the specific href
      const targetLink = links.find(
        (link) => link.getAttribute("href") === "/how-we-do-it"
      );
      expect(targetLink).toBeInTheDocument();
    });

it("Ensure h2 has treaty", () => {
  render(<DashboardIndexPage />);
  //   const header = screen.getByRole("heading");
  //   const headText = "treaty";
  //   expect(header).toHaveTextContent(headText);
  const navElement = screen.getByRole("navigation");
  const header = within(navElement).getByRole("heading", {
    // name: "treaty",
    level: 2,
  });
  expect(header).toHaveTextContent("treaty");
});

    
  it("Ensure there is an heading with the text", () => {
      render(<DashboardIndexPage />);
    const navElement = screen.getByRole("navigation");
    const header = within(navElement).getByRole("heading", {
      // name: "treaty",
      level: 1,
    });
    expect(header).toHaveTextContent("The Demilitarise Education Treaty");
  });
  
});

// Test No 2 ends


// Test No 3 starts
describe("Test University search", () => {
  it("allows the user to search for universities and select one", async () => {
    render(<DashboardIndexPage />);

    // Find the search input and enter 'bri'
    const searchInput = screen.getByPlaceholderText("Search for a university");
    fireEvent.change(searchInput, { target: { value: "bri" } });

    // Ensure the university appears and click it
    const universityOption = await screen.findByText(
      "University of the West of England, Bristol"
    );
    fireEvent.click(universityOption);

    // Ensure the page contains the heading with the university name
    expect(
      screen.getByRole("heading", {
        // name: "treaty",
        level: 3,
      })
    ).toHaveTextContent("University of the West of England, Bristol");

    // Ensure the breadcrumbs contain the university name
    expect(screen.getByLabelText("Breadcrumb").textContent).toContain(
      "University of the West of England, Bristol"
    );

    // Ensure the links are present
    expect(screen.getByText("policies").closest("a")).toHaveAttribute(
      "href",
      "/policies"
    );
    expect(
      screen.getByText("financial partnerships").closest("a")
    ).toHaveAttribute("href", "/financial-partnerships");
    expect(
      screen.getByText("research partnerships").closest("a")
    ).toHaveAttribute("href", "/research-partnerships");
    expect(
      screen.getByText("academic partnerships").closest("a")
    ).toHaveAttribute("href", "/academic-partnerships");
    expect(screen.getByText("FOI requests").closest("a")).toHaveAttribute(
      "href",
      "/foi-requests"
    );
    expect(screen.getByText("actions").closest("a")).toHaveAttribute(
      "href",
      "/actions"
    );
  });
});

// Test No 3 ends