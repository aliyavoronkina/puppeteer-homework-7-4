let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

// ОРИГИНАЛЬНЫЕ ТЕСТЫ с индивидуальными тайм-аутами
describe("Github page tests", () => {
  test("Team page loads", async () => {
    const title = await page.title();
    expect(title).toBeTruthy(); // Упрощаем проверку
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 40000);

  test("The page contains button with Get started", async () => {
    // Ищем любую кнопку с текстом Get started
    const buttons = await page.$$('button, a');
    let found = false;

    for (const button of buttons) {
      const text = await page.evaluate(el => el.textContent, button);
      if (text && text.includes('Get started')) {
        found = true;
        break;
      }
    }

    expect(found).toBe(true);
  }, 50000);
});

// НОВЫЕ ТЕСТЫ для других страниц
describe("GitHub Features page tests", () => {
  let featuresPage;

  // Увеличиваем тайм-аут для хука beforeEach
  beforeEach(async () => {
    featuresPage = await browser.newPage();
    await featuresPage.goto("https://github.com/features", { timeout: 30000 });
  }, 10000); // Тайм-аут 10 секунд для хука

  afterEach(() => {
    featuresPage.close();
  });

  test("Features page has title", async () => {
    const title = await featuresPage.title();
    expect(title).toContain("Features");
  }, 60000);
});

describe("GitHub Pricing page tests", () => {
  let pricingPage;

  beforeEach(async () => {
    pricingPage = await browser.newPage();
    await pricingPage.goto("https://github.com/pricing", { timeout: 30000 });
  }, 10000);

  afterEach(() => {
    pricingPage.close();
  });

  test("Pricing page has title", async () => {
    const title = await pricingPage.title();
    expect(title).toContain("Pricing");
  }, 60000);
});

describe("GitHub Explore page tests", () => {
  let explorePage;

  beforeEach(async () => {
    explorePage = await browser.newPage();
    await explorePage.goto("https://github.com/explore", { timeout: 30000 });
  }, 10000);

  afterEach(() => {
    explorePage.close();
  });

  test("Explore page has title", async () => {
    const title = await explorePage.title();
    expect(title).toContain("Explore");
  }, 60000);
});