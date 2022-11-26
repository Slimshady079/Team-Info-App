const inquirer = require("inquirer");
const fs = require("fs");
const { Manager, Engineer, Intern } = require("./lib");
const group = [];

const managerQs = [
  {
    type: "input",
    message: "Name?",
    name: "name",
  },
  {
    type: "input",
    message: "ID?",
    name: "id",
  },
  {
    type: "input",
    message: "E-mail address?",
    name: "email",
  },
  {
    type: "input",
    message: "Office number?",
    name: "office",
  },
];

const engineerQs = [
  {
    type: "input",
    message: "Employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "Employee's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "Employee's e-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "Employee's github URL?",
    name: "github",
  },
];

const internQs = [
  {
    type: "input",
    message: "Employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "Employee's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "Employee's e-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "Employee's school?",
    name: "school",
  },
];
inquirer.prompt(managerQs).then((answers) => {
  let manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.office
  );

  manager.unique = "Office: " + answers.office;
  group.push(manager);
  moreEmployees();
});

function moreEmployees() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "More employees? If not, finish.",
        choices: ["Engineer", "Intern", "Finish."],
        name: "employee",
      },
    ])

    .then((answers) => {
      if (answers.employee === "Engineer") {
        inquirer.prompt(engineerQs).then((engineerAs) => {
          let engineer = new Engineer(
            engineerAs.name,
            engineerAs.id,
            engineerAs.email,
            engineerAs.github
          );
          engineer.unique = "Github: " + engineerAs.github;
          group.push(engineer);
          moreEmployees();
        });
      } else if (answers.employee === "Intern") {
        inquirer.prompt(internQs).then((internAs) => {
          let intern = new Intern(
            internAs.name,
            internAs.id,
            internAs.email,
            internAs.school
          );
          intern.unique = "University: " + internAs.school;
          group.push(intern);
          moreEmployees();
        });
      } else {
        fs.writeFileSync(
          "index.html",
          `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>test</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./src/css/style.css" />
  </head>
  <body>
    <div>
      <section class="header">
        <header>
          <h1>Group</h1>
        </header>
      </section>

      <div class="container">
        <!-- Content here -->`
        );
        for (let i = 0; i < group.length; i++) {
          fs.appendFileSync(
            "index.html",
            `<div class="card card-background" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${group[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-white">${group[i].getRole()}</h6>
            <div class="card" style="width: 16rem">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${group[i].id}</li>
                <li class="list-group-item">Email: ${group[i].email}</li>
                <li class="list-group-item">${group[i].unique}</li>
              </ul>
            </div>
          </div>
        </div>`
          );
        }
        // change index.html name
        // in between THESE template literals is your code for the cards (includes the js code ${group[i].alsdkfjalskjfd} )
        // change name of index.html <--- the file all this is written to
        // in between the template literals is the top part of html, before the html of the cards
        fs.appendFileSync(
          "index.html",
          `</div>
  </body>
</html>`
        );
      }
    });
}
