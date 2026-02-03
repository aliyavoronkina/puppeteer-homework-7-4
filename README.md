# Домашнее задание к занятию «7.4. Puppeteer 1»

## Решение задач

### Задача 1: Puppeteer timeout
- **Убраны тайм-ауты из конфигурации**: В файле `jest-puppeteer.config.js` удалены все настройки тайм-аутов
- **Индивидуальные тайм-ауты для тестов**: Используется `jest.setTimeout(60000)` для установки глобального тайм-аута для всех тестов и хуков
- **Ручное управление браузером**: Браузер создается и закрывается вручную через Puppeteer API

### Задача 2: Puppeteer before and after hooks
- **Добавлено 3 новых теста** для проверки заголовков разных страниц GitHub:
  1. Features page (`https://github.com/features`)
  2. Pricing page (`https://github.com/pricing`)
  3. Explore page (`https://github.com/explore`)
- **Реорганизация хуков по принципу DRY**:
  - `beforeAll` и `afterAll` вынесены на глобальный уровень для управления жизненным циклом браузера
  - `beforeEach` и `afterEach` размещены внутри каждого блока `describe` для управления страницами
  - Устранено дублирование кода создания/закрытия страниц

## Тестируемые страницы
- Основные тесты: `https://github.com/team` (3 теста из лекции)
- Дополнительные тесты:
  - `https://github.com/features`
  - `https://github.com/pricing`
  - `https://github.com/explore`

## Запуск тестов
```bash
# Установка зависимостей
npm install

# Запуск тестов
npm test