const { test, expect } = require("@playwright/test");



test.describe("Test home page", () => {
  test("ensure p.ded-total-investment is present and it contains a value higher than 1b", async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/dashboard');
  
    const totalInvestmentElement = await page.waitForSelector(
      "p.ded-total-investment"
    );
    const totalInvestmentText = await totalInvestmentElement.innerText();
    const numericValue = parseFloat(totalInvestmentText.replace(/[£B,]/g, ""));
    expect(numericValue).toBeGreaterThan(1000000000);
  });
});

test.describe("Test Basic Navigation", () => {
  test("finds the link and clicks it", async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
  
    const navElement = await page.waitForSelector("nav");
    const targetLink = await navElement.$('a[href="/how-we-do-it"]');
    expect(targetLink).toBeTruthy();
  });

  test("Ensure h2 has treaty", async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
  
    const navElement = await page.waitForSelector("nav");
    const header = await navElement.$("h2");
    expect(await header.innerText()).toBe("treaty");
  });

  test("Ensure there is a heading with the text", async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
  
    const navElement = await page.waitForSelector("nav");
    const header = await navElement.$("h1");
    expect(await header.innerText()).toBe("The Demilitarise Education Treaty");
  });
});

test.describe("Test University search", () => {
  test("allows the user to search for universities and select one", async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/dashboard');
  

    const searchInput = await page.waitForSelector(
      'input[placeholder="Search for a university"]'
    );
    await searchInput.fill("bri");

    await page.waitForTimeout(1000); // Adjust the timeout as per your need to wait for the results to load

    await page.click('text="University of the West of England, Bristol"');

    expect(await page.$eval("h3", (el) => el.innerText)).toBe(
      "University of the West of England, Bristol"
    );
    expect(
      await page.locator('[aria-label="Breadcrumb"]').innerText()
    ).toContain("University of the West of England, Bristol");

    expect(await page.locator('text="policies"').getAttribute("href")).toBe(
      "/policies"
    );
    expect(
      await page.locator('text="financial partnerships"').getAttribute("href")
    ).toBe("/financial-partnerships");
    expect(
      await page.locator('text="research partnerships"').getAttribute("href")
    ).toBe("/research-partnerships");
    expect(
      await page.locator('text="academic partnerships"').getAttribute("href")
    ).toBe("/academic-partnerships");
    expect(await page.locator('text="FOI requests"').getAttribute("href")).toBe(
      "/foi-requests"
    );
    expect(await page.locator('text="actions"').getAttribute("href")).toBe(
      "/actions"
    );
  });
});
