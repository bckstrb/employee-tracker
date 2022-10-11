const addEmployee = () => {
  const roleSql = `SELECT id, title FROM roles`;
  const managerSql = `SELECT id, first_name, last_name FROM employee`;
  let roles = [];

  db.query(roleSql, (err, role) => {
    for (var i = 0; i < role.length; i++) {
      roles.push(role[i].title);
    }

    db.query(managerSql, (err, manager) => {
      let managerArr = [];
      for (var i = 0; i < manager.length; i++) {
        let managerName = "";
        managerName = manager[i].last_name;
        managerArr.push(managerName);
      }
      // console.log(managerArr)
      return inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message:
              "What is the first name of the employee you would like to add?",
          },
          {
            type: "input",
            name: "lastName",
            message:
              "What is the last name of the employee you would like to add?",
          },
          {
            type: "list",
            name: "employeeTitle",
            message: "What is the title of the employee you would like to add?",
            choices: roles,
          },
          {
            type: "list",
            name: "managerName",
            message: "What is the last name of their manager?",
            choices: managerArr,
          },
        ])
        .then((answer) => {
          // console.log(answer.employeeTitle)
          const rId = roles.indexOf(answer.employeeTitle);
          // console.log("rId", rId);
          const mId = managerArr.indexOf(answer.managerName);
          console.log(mId);
          db.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [answer.firstName, answer.lastName, rId + 1, mId + 1],
            (err, role) => {
              console.log(answer.employeeTitle + " has been updated!");
              // console.log(role)
              chooseOption();