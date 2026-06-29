import chalk from 'chalk';
import dedent from 'dedent';

export const printError = (err) => {
  console.log(chalk.bgRed(' ERROR  ') + err);
};

export const printSuccess = (msg) => {
  console.log(chalk.bgGreen(' SUCCESS  ') + msg);
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Вызов без параметров - вывод погоды

    ${chalk.cyan(' -s [CITY] ')} - установить город
    ${chalk.cyan(' -t [API_KEY] ')} - установить API Token
    ${chalk.cyan(' -h ')} - Вывод справки
    `,
  );
};
