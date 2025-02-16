
# ✔️Cypress Test Suite for To-Do List Application

## 🪟 Overview

This project contains automated tests for the (https://todolist.james.am/#/) application using Cypress.

The test suite covers various aspects of the application's functionality, ensuring elements are visible and interactive, tasks can be created, edited, and deleted properly.

## 📃 Prerequisites

### Before running the tests, ensure you have the following installed:

Node.js

Cypress

## ⚙️ Installation

### Clone the repository:

git clone https://github.com/anikush-yes/Cypress-ToDoList-tests
<br>
<br>
cd your-repository-folder

### Install dependencies:

npm install

# 🚀Running Tests

### To execute the Cypress tests, use the following command:

npx cypress open

This will launch the Cypress Test Runner, where you can select and run the tests.

### Alternatively, to run the tests in the command line:

npx cypress run

### Ensure the cy.visit URL is correct and accessible before running the tests.

# 🧪Test Cases

The test suite includes the following:

### 1️⃣ Visiting the Website

Ensures the application is accessible before each test.

### 2️⃣ Header Element Test

Checks if the <header> is visible on the page.

### 3️⃣ Header Text Test

Verifies if the header contains the text "To Do List".

### 🍀 Create New To-Do Test

Tests adding a new to-do item and verifies its presence in the list.

### 5️⃣ Footer Text Test

Checks if the footer contains the correct text: "Double-click to edit a todo".

### 6️⃣ Input Placeholder Test

Ensures the input field has the correct placeholder: "What needs to be done?".

### 7️⃣ Add Multiple Tasks Test

Adds multiple tasks and ensures the list contains at least three items.

### 8️⃣ Delete To-Do List Task Test

Adds a task and then deletes it, confirming its removal.

### 9️⃣ Edit To-Do List Item Test

Edits an existing task and verifies the updated text.

## 🗒️ Notes

• The test for footer text contains a typo in "toodo" instead of "todo".

• The placeholder test should check for "What needs to be done?" instead of "What need's to be done?".


## 🪪 License

This project is open-source and available under the MIT License.
