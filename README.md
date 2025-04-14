# JavaScript Fortune Teller

A simple command-line/browser console application written in JavaScript that generates a personalized "fortune" based on a user's name and age.

## Description

This script defines a function `fortuneTeller` that takes a name (string) and an age (number) as input. It performs several checks on the inputs and then generates two parts to a fortune: one based on characteristics of the name (length, starting letter, specific characters) and one based on the user's age range.

The script also includes code to interactively prompt the user for their name and age using the `prompt()` function (typically available in web browsers) and then displays the generated fortune using `console.log()`.

## Features

* Accepts user's name and age as input.
* Validates inputs to ensure the name is a non-empty string and the age is a positive number.
* Generates fortune components based on:
    * **Name:** Length, starting with 'r' (case-insensitive), containing 'i' (case-insensitive).
    * **Age:** Specific messages assigned to different age brackets.
* Combines multiple name-based fortunes gracefully.
* Formats the final output clearly, indicating which part of the fortune relates to the name and which to the age.
* Handles cancellation of prompts and invalid input gracefully with informative messages.

## How It Works

1.  **Input Validation:** The `fortuneTeller` function first checks if the `name` is a valid, non-empty string and if the `age` is a positive number. If not, it returns an error message immediately.
2.  **Name Fortune Logic:**
    * An array `nameFortunes` stores potential fortune parts.
    * Conditions based on `name.length`, `name.toLowerCase().startsWith("r")`, and `name.toLowerCase().includes("i")` add specific strings to the `nameFortunes` array.
    * If no specific conditions are met, a default fortune ("You will purchase a new car.") is used.
    * The array elements are joined into a single string with commas and "and" before the last element.
3.  **Age Fortune Logic:**
    * A series of `if-else if` statements check the `age` against predefined ranges (`< 12`, `<= 17`, `<= 25`, `<= 40`, `<= 60`, `> 60`).
    * A corresponding fortune string (`ageFortunePart`) is assigned based on the range.
    * The first letter of the age fortune is capitalized.
    * *Note: There is a typo in the original code for the 41-60 age range ("destint" instead of "destiny").*
4.  **Output Formatting:** The function returns a formatted string combining the user's name, the name-based fortune, and the age-based fortune, clearly labeled.
5.  **User Interaction (Outside the function):**
    * Uses `prompt()` to get the name and age from the user.
    * Checks if the user provided input or cancelled the prompts.
    * Parses the age string to an integer using `parseInt()`.
    * Performs another check to ensure the parsed age is a valid positive number before calling `fortuneTeller`.
    * Prints the final fortune or relevant error messages to the console using `console.log()`.

## How to Use

1.  **Copy the Code:** Copy the entire JavaScript code block.
2.  **Open Browser Console:** Open your web browser (like Chrome, Firefox, Edge) and open the Developer Tools (usually by pressing F12). Navigate to the "Console" tab.
3.  **Paste and Run:** Paste the copied code into the console and press Enter.
4.  **Follow Prompts:** Small pop-up boxes will appear asking for your name and then your age. Enter the requested information and click "OK".
5.  **View Fortune:** The script will process your input, and the generated fortune (or an error message if the input was invalid) will be printed directly into the console.

## Example Output (for Name="Alice", Age=22)
