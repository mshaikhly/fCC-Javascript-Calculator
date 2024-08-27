# JavaScript Calculator

This repository contains a JavaScript Calculator built with React, Vite, and TypeScript. The application allows users to perform basic arithmetic operations with a fully functional calculator interface. The app is styled with a personal touch and meets the functionality required by the project.

## Live Demo

You can view the live demo of the app [here](https://main--peppy-duckanoo-a432e7.netlify.app/).

![image](https://github.com/user-attachments/assets/d9bf43e1-6132-4780-9a70-73f97c666c03)


## Features

- **Basic Arithmetic Operations**: Supports addition, subtraction, multiplication, and division with a user-friendly interface.
- **Keyboard and Click Input**: The calculator supports both mouse clicks and keyboard input for numbers and operators.
- **Formula Logic**: The calculator follows formula logic, observing the order of operations when evaluating expressions.
- **Responsive Design**: The app is designed to be fully responsive, ensuring a seamless experience across different devices.

## User Stories

The app fulfills the following user stories:

1. **User Story #1:** My calculator contains a clickable element with an `=` (equals sign) and a corresponding `id="equals"`.
2. **User Story #2:** My calculator contains 10 clickable elements, each representing a number from 0-9, with corresponding IDs from `id="zero"` to `id="nine"`.
3. **User Story #3:** My calculator contains 4 clickable elements, each representing a primary mathematical operator, with corresponding IDs `id="add"`, `id="subtract"`, `id="multiply"`, and `id="divide"`.
4. **User Story #4:** My calculator contains a clickable element representing a decimal point (`.`) with a corresponding `id="decimal"`.
5. **User Story #5:** My calculator contains a clickable element with an `id="clear"` that resets the calculator to its initial state.
6. **User Story #6:** My calculator contains an element with an `id="display"` that displays the current input and result.
7. **User Story #7:** The clear button resets the calculator, displaying `0` in the `#display` element.
8. **User Story #8:** Inputted numbers are displayed in the `#display` element.
9. **User Story #9:** The calculator correctly evaluates chains of operations and displays the result in the `#display` element.
10. **User Story #10:** The calculator prevents numbers from starting with multiple zeros.
11. **User Story #11:** When a decimal is inputted, it appends to the current number in `#display` and prevents multiple decimals in one number.
12. **User Story #12:** The calculator performs operations on numbers containing decimals.
13. **User Story #13:** If multiple operators are entered consecutively, the last operator entered (excluding `-` for negative numbers) is used for the operation.
14. **User Story #14:** Pressing an operator immediately after `=` starts a new calculation using the result from the previous calculation.
15. **User Story #15:** The calculator handles rounding with precision, ensuring accurate results for operations like `2 / 7`.

## 💻 How It Works

- **App Structure**: The app is built with a modular structure using React components, which allows for better code organization and scalability.
- **TypeScript for Type Safety**: TypeScript ensures type safety throughout the project, catching potential errors early in development.
- **Vite for Fast Development**: Vite is used for a modern and efficient development experience, providing fast build times and instant feedback.
- **State Management**: React’s built-in state management is used to handle the calculator’s current inputs, operations, and results.

## 📚 Additional Notes

- This project demonstrates my skills in building web applications using React, with a focus on type safety and performance optimizations.
- Feel free to use this project as a reference or modify it for your own purposes. The modular design allows for easy customization.
- Contributions and feedback are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## 🎨 Personal Touch

I added my own personal styling and features to enhance the user experience, making the calculator visually appealing and easy to use. These customizations make the app unique while adhering to the core functionality required by the project. I add a dark/light mode button.

## How to Run the Project Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mshaikhly/fCC-Javascript-Calculator.git
   cd fCC-Javascript-Calculator

2. **Install the dependencies:**

   ```bash
   npm install

3. **Start the development server:**

   ```bash
   npm run dev

4. **Open the app in your browser:**

   Go to http://localhost:3000 to see the app in action.

