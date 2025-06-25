# Playwright TypeScript Testing Framework for OpenCart

An industry-standard end-to-end testing framework for OpenCart using Playwright and TypeScript, following best practices for test automation.

## 🚀 Features

- **Page Object Model** - Well-structured page objects for better maintainability
- **TypeScript Support** - Type safety and better developer experience
- **Cross-Browser Testing** - Supports Chromium, Firefox, and WebKit
- **Mobile Testing** - Test responsive design across different viewports
- **Parallel Execution** - Run tests in parallel for faster feedback
- **HTML Reports** - Detailed test execution reports
- **Fixtures** - Reusable test setup and teardown logic
- **Environment Configuration** - Easily switch between different environments
- **Utilities** - Helpers for common testing scenarios

## 📁 Project Structure

```
.
├── config/               # Configuration files
├── fixtures/             # Test fixtures and test data
├── page-objects/         # Page object models
│   ├── pages/           # Individual page objects
│   └── base.page.ts     # Base page class
├── tests/                # Test files
│   └── e2e/             # End-to-end test cases
├── utils/                # Utility functions and helpers
├── .gitignore
├── package.json
├── playwright.config.ts  # Playwright configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Prerequisites

- Node.js 16+
- npm or yarn
- Playwright browsers (installed automatically)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Playwright-Typescript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

Run all tests in headless mode:
```bash
npm test
```

Run tests in headed mode:
```bash
npm run test:headed
```

Run tests for a specific browser:
```bash
npm run test:chrome
# or
npm run test:firefox
# or
npm run test:safari
```

Run tests in debug mode:
```bash
npm run test:debug
```

## 📊 Viewing Reports

After test execution, view the HTML report with:
```bash
npm run report
```

## 🧩 Test Organization

- **Page Objects**: Located in `page-objects/` directory
- **Test Files**: Located in `tests/e2e/` directory
- **Fixtures**: Reusable test data and setup in `fixtures/`
- **Utils**: Common utilities in `utils/`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) - For the amazing testing framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [OpenCart](https://www.opencart.com/) - The e-commerce platform being tested