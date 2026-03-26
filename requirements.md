# 📌 Project: NAA Automation Framework

## 🧾 Overview
The NAA Automation Framework is designed to automate end-to-end testing of the application, covering regression and sanity test scenarios. The framework ensures reliability, scalability, and maintainability using modern automation practices.

---

## 🎯 Objectives
- Automate critical business workflows
- Reduce manual testing effort
- Ensure faster regression and sanity execution
- Improve test coverage and reliability
- Enable continuous testing via CI/CD integration

---

## 🛠️ Tech Stack
- **Automation Tool:** Playwright (JavaScript)
- **Design Pattern:** Page Object Model (POM)
- **Language:** JavaScript
- **Test Runner:** Playwright Test Runner
- **Version Control:** Git

---

## ⚙️ Framework Features

### ✅ Page Object Model (POM)
- Separates test logic and UI interactions
- Improves code reusability and readability
- Easy maintenance when UI changes

---

### ✅ Data-Driven Testing
- Test data managed using JSON files
- Enables multiple test scenarios without changing code
- Improves scalability of test cases

---

### ✅ Retry Mechanism
- Automatically retries failed tests
- Helps handle flaky tests
- Improves test stability in CI environments

---

### ✅ Reporting (Allure)
- Detailed execution reports
- Step-level insights
- Supports debugging with logs and attachments

---

### ✅ Parallel Execution
- Multiple tests run simultaneously
- Reduces execution time significantly
- Configurable workers

---

### ✅ Cross-Browser Testing
- Supports execution across:
  - Chromium
  - Firefox
  - WebKit
- Ensures application compatibility across browsers

---

## 🧪 Test Coverage

### 🔹 Sanity Testing
- Quick validation of critical functionalities

### 🔹 Regression Testing
- Full application validation after changes

---

## 📁 Folder Structure

```bash
src/
├── pages/        # Page Object classes
├── tests/        # Test specs
├── test-data/    # JSON test data
├── utils/        # Helper utilities
├── reporting/    # Reports (Allure, HTML)

```

---

## 🔄 Execution Strategy
- Supports full suite execution
- Tag-based execution (e.g., @sanity, @regression)
- Parallel execution for faster runs
- Retry mechanism ensures stability

---

## 📊 Reporting Strategy
- Allure reports generated after execution
- Includes:
  - Test status (Pass/Fail)
  - Execution steps
  - Logs and debugging information

---

## 🔐 Version Control
- Managed using Git
- Supports collaboration and version tracking

---

## 🚀 Future Enhancements
- CI/CD integration (Jenkins/GitHub Actions)
- API + UI combined testing
- Enhanced reporting and logging
- Improved test data management

---

## ✅ Summary
The NAA Automation Framework is a scalable and maintainable automation solution built using Playwright, supporting efficient regression and sanity testing with modern automation practices.


## 🔐 The Standard Git Workflow

Follow these steps when picking up a new task or writing a new Playwright test.

- Step 1: Sync your local repository

Always start by ensuring your local main branch is up-to-date with the remote repository.

```
git checkout main
git pull origin main
```

- Step 2: Create a new branch

Create and switch to a new branch for your specific task.
```
git checkout -b feature/your-feature-name
```

- Step 3 : Switch to your branch
```
git checkout branch-name
```
- Step 4: Make your changes

Write your Playwright tests, update page objects, or fix bugs. Run your tests locally before proceeding to ensure nothing is broken:
```
npx playwright test
```

- Step 5: Stage your changes (Add)

Review what files you have changed. 
Check your modified files
```
git status
```
```
git add .
```


- Step 6: Commit your changes

Write a clear, concise commit message (see the Commit Messages section below).
```
git commit -m "test(login): add positive and negative login scenarios"
```

- Step 7: Push to the remote repository

Push your branch to the remote server. 
```
git push -u origin feature/your-feature-name
```

- Step 8: Open a Pull Request (PR)

Go to GitHub and open a Pull Request against the main branch.

Add a clear description of what the PR does.

Link any relevant Jira tickets or issue numbers.

Request a review from at least one other team member.