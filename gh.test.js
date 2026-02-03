const puppeteer = require('puppeteer');

// Устанавливаем глобальный таймаут для всех тестов и хуков
jest.setTimeout(60000);

let browser;
let page;

// Глобальный beforeAll - запуск браузера один раз для всех тестов
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
});

// Глобальный afterAll - закрытие браузера после всех тестов
afterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

// ОРИГИНАЛЬНЫЕ ТЕСТЫ с индивидуальными тайм-аутами
describe("Github page tests", () => {
  // beforeEach для этой группы тестов - открываем конкретную страницу
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team", { waitUntil: 'networkidle2' });
  });

  // afterEach для этой группы тестов - закрываем страницу
  afterEach(async () => {
    if (page && !page.isClosed()) {
      await page.close();
    }
  });

  test("Team page loads", async () => {
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains button with Get started", async () => {
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
  });
});

// НОВЫЕ ТЕСТЫ для других страниц
describe("GitHub Features page tests", () => {
  // beforeEach для этой группы тестов - открываем конкретную страницу
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/features", { waitUntil: 'networkidle2' });
  });

  // afterEach для этой группы тестов - закрываем страницу
  afterEach(async () => {
    if (page && !page.isClosed()) {
      await page.close();
    }
  });

  test("Features page has title", async () => {
    const title = await page.title();
    expect(title).toContain("Features");
  });
});

describe("GitHub Pricing page tests", () => {
  // beforeEach для этой группы тестов - открываем конкретную страницу
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/pricing", { waitUntil: 'networkidle2' });
  });

  // afterEach для этой группы тестов - закрываем страницу
  afterEach(async () => {
    if (page && !page.isClosed()) {
      await page.close();
    }
  });

  test("Pricing page has title", async () => {
    const title = await page.title();
    expect(title).toContain("Pricing");
  });
});

describe("GitHub Explore page tests", () => {
  // beforeEach для этой группы тестов - открываем конкретную страницу
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/explore", { waitUntil: 'networkidle2' });
  });

  // afterEach для этой группы тестов - закрываем страницу
  afterEach(async () => {
    if (page && !page.isClosed()) {
      await page.close();
    }
  });

  test("Explore page has title", async () => {
    const title = await page.title();
    expect(title).toContain("Explore");
  });
});