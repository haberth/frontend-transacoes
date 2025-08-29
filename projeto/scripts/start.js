#!/usr/bin/env node

const { spawn } = require('child_process');
const chalk = require('chalk');

console.log(chalk.blue('🚀 Starting ms-orizon-api-bradesco...'));
console.log(chalk.gray('════════════════════════════════════════'));

// Check if Java is available
const checkJava = spawn('java', ['--version'], { stdio: 'pipe' });

checkJava.on('close', (code) => {
  if (code !== 0) {
    console.log(chalk.red('❌ Java is not installed or not in PATH'));
    console.log(chalk.yellow('Please install Java 21 or higher'));
    process.exit(1);
  }
  
  console.log(chalk.green('✅ Java is available'));
  
  // Check if Maven is available
  const checkMaven = spawn('mvn', ['--version'], { stdio: 'pipe' });
  
  checkMaven.on('close', (mvnCode) => {
    if (mvnCode !== 0) {
      console.log(chalk.red('❌ Maven is not installed or not in PATH'));
      console.log(chalk.yellow('Please install Maven'));
      process.exit(1);
    }
    
    console.log(chalk.green('✅ Maven is available'));
    console.log(chalk.blue('📦 Starting Spring Boot application...'));
    console.log(chalk.gray('────────────────────────────────────────'));
    
    // Start the Spring Boot application
    const mvnRun = spawn('mvn', ['spring-boot:run'], { 
      stdio: 'inherit',
      shell: true
    });
    
    mvnRun.on('close', (springCode) => {
      if (springCode !== 0) {
        console.log(chalk.red('❌ Application failed to start'));
        process.exit(springCode);
      }
    });
    
    mvnRun.on('error', (err) => {
      console.log(chalk.red('❌ Error starting application:'), err.message);
      process.exit(1);
    });
  });
  
  checkMaven.on('error', () => {
    console.log(chalk.red('❌ Maven is not installed or not in PATH'));
    process.exit(1);
  });
});

checkJava.on('error', () => {
  console.log(chalk.red('❌ Java is not installed or not in PATH'));
  process.exit(1);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log(chalk.yellow('\n👋 Shutting down gracefully...'));
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log(chalk.yellow('\n👋 Shutting down gracefully...'));
  process.exit(0);
});
