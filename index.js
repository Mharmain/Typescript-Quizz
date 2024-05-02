#! usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log("\n");
console.log("=".repeat(90));
console.log(chalk.cyanBright.bold(' \t \t Welcome to the \'Muhammad Harmain\' - TypeScript Quiz!'));
console.log("=".repeat(90));
console.log("\n");
let score = 0;
let questions = await inquirer.prompt([
    {
        name: 'question1',
        message: chalk.yellow('Q1. What is TypeScript primarily used for?'),
        type: 'list',
        choices: ['A. Memory Management', 'B. Dynamic Typing', 'C. Static Typing', 'D. Asynchronous operations']
    },
    {
        name: 'question2',
        message: chalk.yellow('Q2. Which of the following is NOT a valid TypeScript data type?'),
        type: 'list',
        choices: ['A. void', 'B. any', 'C. tuple', 'D. dynamic']
    },
    {
        name: 'question3',
        message: chalk.yellow('Q3. How do you denote a variable as readonly in TypeScript?'),
        type: 'list',
        choices: ['A. const', 'B. readonly', 'C. fix', 'D. static']
    },
    {
        name: 'question4',
        message: chalk.yellow('Q4. How do you specify that a function does not return anything in TypeScript?'),
        type: 'list',
        choices: ['A. function myFunc(): undefined', 'B. function myFunc(): void', 'C. function myFunc(): null', 'D. function myFunc(): None']
    },
    {
        name: 'question5',
        message: chalk.yellow('Q5. How do you define a custom type in TypeScript?'),
        type: 'list',
        choices: ['A. interface', 'B. typedef', 'C. type', 'D. Both A & C']
    },
]);
console.log("\n");
console.log("=".repeat(90));
console.log(chalk.cyanBright.bold('Checking your answers...'));
switch (questions.question1) {
    case 'C. Static Typing':
        score++;
        console.log(chalk.green('Answer # 1: Correct!'));
        break;
    default:
        console.log(chalk.red('Answer # 1: Incorrect!'));
        break;
}
switch (questions.question2) {
    case 'D. dynamic':
        score++;
        console.log(chalk.green('Answer # 2: Correct!'));
        break;
    default:
        console.log(chalk.red('Answer # 2: Incorrect!'));
        break;
}
switch (questions.question3) {
    case 'B. readonly':
        score++;
        console.log(chalk.green('Answer # 3: Correct!'));
        break;
    default:
        console.log(chalk.red('Answer # 3: Incorrect!'));
        break;
}
switch (questions.question4) {
    case 'B. function myFunc(): void':
        score++;
        console.log(chalk.green('Answer # 4: Correct!'));
        break;
    default:
        console.log(chalk.red('Answer # 4: Incorrect!'));
        break;
}
switch (questions.question5) {
    case 'D. Both A & C':
        score++;
        console.log(chalk.green('Answer # 5: Correct!'));
        break;
    default:
        console.log(chalk.red('Answer # 5: Incorrect!'));
        break;
}
console.log("=".repeat(90));
console.log("\n");
console.log("=".repeat(90));
console.log(chalk.greenBright.bold(`Your score is: ${score}/5`));
console.log("=".repeat(90));
