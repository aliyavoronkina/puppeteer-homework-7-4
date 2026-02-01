# Домашнее задание 7.4 Puppeteer

## Выполненные задачи

### Задача 1: Puppeteer timeout
- Убраны глобальные тайм-ауты из конфигурации (`jest.config.js`)
- Каждому тесту задан индивидуальный тайм-аут:
    - 60000 мс для основных тестов
    - 40000 мс для теста проверки ссылок
    - 50000 мс для теста проверки кнопок

### Задача 2: Puppeteer before and after hooks
- Добавлены 3 новых блока тестов для страниц:
    1. GitHub Features page tests
    2. GitHub Pricing page tests
    3. GitHub Explore page tests
- Каждый блок имеет свои хуки `beforeEach`/`afterEach`
- Тесты проверяют заголовки соответствующих страниц
- Соблюден принцип DRY

## Запуск тестов
npm install

npm test


