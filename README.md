# User Signup Page - Job Interview Solution

## Overview

This project demonstrates the creation of a User Signup page that captures basic demographic and contact information, including:

- Name
- Email
- Phone
- Address
- Emergency Contact
- Age
- Date of Birth

The solution is built using a Vite React application and JavaScript, showcasing the ability to work with front-end technologies like React and Bootstrap for design, along with handling form validation and data submission.

## Features

### Basic User Signup Form

- A form is created to capture user details such as name, email, phone number, address, and other relevant information.
- Bootstrap is used for basic styling of the form to make it clean and responsive.

### Submit Button

- A submit button is included to trigger JavaScript functions that handle form submission.
- The form includes basic validation, marking certain fields as required (e.g., Name, Email), while others are optional.

### Form Validation

- Basic field validation is performed to ensure the user submits the form with the correct data.
- Fields like name and email are required. A validation error message is displayed if these fields are left empty.

### JSON Object Creation

- The data entered into the form is captured and organized into a JSON object.
- This JSON object is then logged to the console.

### Mock API Request

- A mock API call is made to a pretend endpoint (`myfunapi.fake/user/signup`), sending the JSON object as the request body (commented out for now as the endpoint doesn’t exist).
- Instead of making the actual API call, a mock function `mockAPI()` is called, which returns a success or failure response based on the data provided.
- Success or failure messages are displayed on the page accordingly.

### Mock API & UserHelper Integration

- A fake `UserHelper` library simulates user data handling.
- The `create()` and `save()` methods of `UserHelper` are used to manage the user object.
- The mock API simulates the creation and saving of a user, handling potential errors, and returning success or failure messages.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repo-name.git

   ```

2. Navigate to the project directory:

   ```sh
   cd blueStepAuth/react
   ```

3. Install the dependencies:

```sh
npm install
```

### Running the Application

1. Start the development server:

```sh
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Vanilla JavaScript Implementation

For those who prefer to use vanilla JavaScript instead of React, a similar user signup page can be created with basic HTML, CSS, and JavaScript.

### Features

#### Basic User Signup Form

- An HTML form is created to capture user details such as name, email, phone number, address, and other relevant information.
- Basic CSS is used for styling the form to make it clean and responsive.

#### Submit Button

- A submit button is included to trigger JavaScript functions that handle form submission.
- The form includes basic validation, marking certain fields as required (e.g., Name, Email), while others are optional.

#### Form Validation

- Basic field validation is performed using JavaScript to ensure the user submits the form with the correct data.
- Fields like name and email are required. A validation error message is displayed if these fields are left empty.

#### JSON Object Creation

- The data entered into the form is captured and organized into a JSON object.
- This JSON object is then logged to the console.

#### Mock API Request

- A mock API call is made to a pretend endpoint (`myfunapi.fake/user/signup`), sending the JSON object as the request body (commented out for now as the endpoint doesn’t exist).
- Instead of making the actual API call, a mock function `mockAPI()` is called, which returns a success or failure response based on the data provided.
- Success or failure messages are displayed on the page accordingly.

### Getting Started

#### Prerequisites

- Node.js
- npm or yarn
- live-server

#### Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/your-repo-name.git
```

2. Navigate to the project directory:

```sh
cd blueStepAuth/vanillajs
```

3. Install live-server globally if you haven't already:

```sh
npm install -g live-server
```

### Running the Application

1. Start the live-server:

```sh
live-server
```

2. Open your browser and navigate to `http://localhost:8080` to see the application in action.

## Conclusion

This project provides a basic implementation of a user signup page using React and Bootstrap. It demonstrates form handling, validation, and mock API integration, showcasing essential front-end development skills.
