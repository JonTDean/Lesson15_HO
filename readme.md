# Requirements

Write a function that checks the input of a user's name for the proper format. Add the following code into the specified files.

## Step 1

1. Within your HTML file, add the following:

   - Create a form that asks the user to input their first and last name into two different inputs

   - Your HTML page should include instructions based on your function. For example:

   ```html
   <h1>Please Enter Your First and Last Name</h1>
   ```

## Step 2

Within your JavaScript file, add the following:

1. Write a function named regexChecker() that does the following:
   - Pulls in the users information using the DOM from the HTML form
   - Checks the following against the user's form information using Regex:
     - The first letter of the first name should be capitalized
     - The first letter of the last name should be capitalized
     - The user must enter more than one character for first and last name.
     - No special characters should be used.
   - If all of these requirements are matched, alert the string "Yay! Your inputs were all correct!"
   - If all of the requirements are not matched, alert the string "Oh no! Thats an invalid format!"
