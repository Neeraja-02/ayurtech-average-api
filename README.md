# Ayurtech Average REST API

This project is a simple REST API created as part of the Ayurtech coding
assignment.

The API accepts a number through a POST request and returns the average of
all valid numbers received by the server so far.

---

## Assignment Details

**Ayurtech:** R280926724P

**Deal Name:** AYU0926PEND01

---

## What This Project Does

The project provides one API endpoint:

```text
POST /average
```

The API accepts a number in the request body.

For example:

```json
{
  "number": 10
}
```

The server stores the number and calculates the average of all numbers
received so far.

For example:

First request:

```json
{
  "number": 10
}
```

Response:

```json
{
  "average": 10
}
```

Second request:

```json
{
  "number": 20
}
```

Response:

```json
{
  "average": 15
}
```

Third request:

```json
{
  "number": 30
}
```

Response:

```json
{
  "average": 20
}
```

The calculation is:

```text
(10 + 20 + 30) / 3 = 20
```

---

## Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Husky
- Commitlint

---

## Requirements

Before running the project, make sure the following are installed:

- Node.js
- npm
- Git

---

## Project Structure

```text
ayurtech-average-api/
│
├── src/
│   ├── average.js
│   └── server.js
│
├── test/
│   └── average.test.js
│
├── .husky/
│   ├── commit-msg
│   └── pre-commit
│
├── .gitignore
├── commitlint.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

After downloading or cloning the project, install the required packages:

```bash
npm install
```

The required packages are already listed in `package.json`.

---

## How to Run the Project

Start the server using:

```bash
npm start
```

The server will start on:

```text
http://localhost:3000
```

---

## API Details

### POST /average

This endpoint accepts a number and returns the average of all numbers
received by the server so far.

### Request URL

```text
http://localhost:3000/average
```

### Method

```text
POST
```

### Request Body

The request body should contain a number.

Example:

```json
{
  "number": 10
}
```

### Response

```json
{
  "average": 10
}
```

---

## Example

Suppose the following numbers are sent to the API:

```text
10
20
30
40
```

After receiving all four numbers, the API returns:

```json
{
  "average": 25
}
```

Because:

```text
(10 + 20 + 30 + 40) / 4 = 25
```

---

## Testing with Postman

The API can be tested using Postman.

### Step 1

Open Postman.

### Step 2

Select:

```text
POST
```

### Step 3

Enter:

```text
http://localhost:3000/average
```

### Step 4

Go to:

```text
Body → raw → JSON
```

### Step 5

Enter:

```json
{
  "number": 10
}
```

### Step 6

Click **Send**.

The response will be:

```json
{
  "average": 10
}
```

Now send another request:

```json
{
  "number": 20
}
```

The response will be:

```json
{
  "average": 15
}
```

---

## Testing with CURL

The API can also be tested using CURL.

Example:

```bash
curl -X POST http://localhost:3000/average -H "Content-Type: application/json" -d "{\"number\":10}"
```

Response:

```json
{
  "average": 10
}
```

Send another number:

```bash
curl -X POST http://localhost:3000/average -H "Content-Type: application/json" -d "{\"number\":20}"
```

Response:

```json
{
  "average": 15
}
```

---

## Invalid Input

The API checks whether the request contains a valid number.

For example:

```json
{
  "number": "hello"
}
```

The API returns:

```json
{
  "error": "Please provide a valid number"
}
```

An empty request such as:

```json
{}
```

will also return an error.

---

## Automated Tests

The project includes automated test cases using Jest and Supertest.

The tests check:

1. First number is accepted.
2. Multiple numbers are accepted.
3. The correct average is calculated.
4. Decimal averages are calculated.
5. Invalid input is rejected.
6. Empty input is rejected.

The tests can be run using:

```bash
npm test
```

---

## JSDoc

JSDoc comments are included in the main JavaScript functions.

They explain:

- What the function does
- What parameters it accepts
- What it returns

Example:

```javascript
/**
 * Calculate average of all numbers.
 * @returns {number}
 */
```

---

## Git Hooks

Git hooks are enabled using Husky.

The project contains two Git hooks.

### Pre-commit Hook

Before a commit is created, the project automatically runs the test cases.

```text
npm test
```

This helps make sure that the code is working before it is committed.

### Commit Message Hook

The commit message is checked using Commitlint.

This makes sure that commit messages follow the Conventional Commits format.

---

## Conventional Commits

This project uses the Conventional Commits format.

Examples of valid commit messages:

```text
feat: add average API
```

```text
fix: validate number input
```

```text
test: add average test cases
```

```text
docs: update README
```

```text
refactor: improve average calculation
```

Common commit types used in this project are:

```text
feat      New feature
fix       Bug fix
test      Test changes
docs      Documentation changes
refactor  Code changes without changing functionality
chore     Maintenance changes
```

---

## How the API Works

The API works in a simple way.

```text
Client
  |
  | POST /average
  | { "number": 10 }
  |
  v
Express Server
  |
  v
Store Number
  |
  v
Calculate Average
  |
  v
Return Response
```

For example:

```text
Request 1 → 10 → Average = 10

Request 2 → 20 → Average = 15

Request 3 → 30 → Average = 20
```

---

## Important Note

The numbers are stored in the server's memory.

This means that if the server is stopped or restarted, the previously
stored numbers will be cleared.

This project does not use a database because the assignment only requires
the server to maintain the numbers received while it is running.

---

## Files in the Project

### `src/server.js`

Contains the Express server and the `/average` API endpoint.

### `src/average.js`

Contains the logic for storing numbers and calculating the average.

### `test/average.test.js`

Contains automated test cases for the API.

### `.husky/pre-commit`

Runs the tests before a Git commit.

### `.husky/commit-msg`

Checks the commit message format.

### `commitlint.config.js`

Contains the Conventional Commit configuration.

### `package.json`

Contains the project information, dependencies, and scripts.

### `.gitignore`

Contains files and folders that should not be uploaded to GitHub.

---

---

## GitHub Repository

The source code for this project is available in the public GitHub
repository.

Repository:

https://github.com/Neeraja-02/ayurtech-average-api

---

## Author

**Neeraja Angadikurthi**