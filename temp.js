return inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "What is the first name of the employee you would like to add?",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the last name of the employee you would like to add?",
        },
        {
          type: "list",
          name: "employeeTitle",
          message: "What is the title of the employee you would like to add?",
          choices: role
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO employees (first_name, last_name, title) VALUES (?, ?, ?);",
          [
            answer.firstName,
            answer.lastName,
            answer.employeeTitle
          ],
          (err, res) => {
            console.log(answer.employeeTitle + " has been updated!");
            chooseOption();
          }
        );