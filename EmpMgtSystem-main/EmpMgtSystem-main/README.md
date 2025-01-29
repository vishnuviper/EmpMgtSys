# EmpMgtSystem
Front-End Instructions:
----------------------------

[Uploading Document Outlining - Employee Management System.pdf…]()

**Step 1:**
Open Visual Studio Terminal and run the following command to start the program:
npm start

**Step 2:**
Once the program is running, click on the "Add Employee" button.

**Step 3:**
Fill out all the input fields on the "Add Employee" page.
Note that the 7th input field (Position) is mandatory.
The only valid entries for this field are either Admin or Employee.
Make sure to keep the case sensitivity unchanged for these two values.
If the position is set to Admin, the user will have access to the Admin page.
For any other position name (e.g., Manager, Accounts, etc.), the user will be treated as an Employee.
Once all fields are filled, click "Submit."

**Step 4:**
After submitting, the system will generate and display an Employee Code and password.

**Step 5:**
Now come to Visual Studio code, navigate to src -> components -> Login.js.
In the Login.js file:
Comment out line 23 by selecting it and pressing (Ctrl + /).
Uncomment line 22 by doing the same (Ctrl + /)( check, if it is commented out).

**Step 6:**
Run the program again and fill in the login page with the Admin's user code and password. Click "Login."
Once logged in, you can now use the "Add Employee" button to continue adding new employees.

********************************************************************************************************
