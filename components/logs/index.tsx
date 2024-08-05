import chalk from 'chalk';

const createLogs = (service: string, message: string) => {
    let date: Date = new Date();  

    console.info(chalk.yellow.bold(`[${date}] => (${service})`), chalk.gray.bold(message));
};

export default createLogs;
