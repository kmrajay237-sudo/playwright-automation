/**
 * Logger utility for all logging needs
 * Supports console and file logging
 */
const fs = require('fs');
const path = require('path');

class Logger {
  constructor(logDir = './logs') {
    // Convert to absolute path
    this.logDir = path.isAbsolute(logDir) ? logDir : path.resolve(process.cwd(), logDir);
    const today = new Date().toISOString().split('T')[0];
    this.logFile = path.join(this.logDir, `test-${today}.log`);
    
    // Create logs directory if it doesn't exist
    try {
      if (!fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
        console.log(`✓ Logs directory created: ${this.logDir}`);
      }
    } catch (error) {
      console.error(`Failed to create logs directory: ${error.message}`);
    }

    // Log levels
    this.levels = {
      INFO: 'INFO',
      DEBUG: 'DEBUG',
      WARN: 'WARN',
      ERROR: 'ERROR',
      SUCCESS: 'SUCCESS'
    };

    // Colors for console output
    this.colors = {
      reset: '\x1b[0m',
      bright: '\x1b[1m',
      dim: '\x1b[2m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      cyan: '\x1b[36m'
    };
  }

  /**
   * Get colored output based on log level
   */
  getColoredOutput(level, message) {
    const timestamp = new Date().toISOString();
    const baseMessage = `[${timestamp}] [${level}] ${message}`;

    switch (level) {
      case this.levels.INFO:
        return `${this.colors.blue}${baseMessage}${this.colors.reset}`;
      case this.levels.DEBUG:
        return `${this.colors.cyan}${baseMessage}${this.colors.reset}`;
      case this.levels.WARN:
        return `${this.colors.yellow}${baseMessage}${this.colors.reset}`;
      case this.levels.ERROR:
        return `${this.colors.red}${baseMessage}${this.colors.reset}`;
      case this.levels.SUCCESS:
        return `${this.colors.green}${baseMessage}${this.colors.reset}`;
      default:
        return baseMessage;
    }
  }

  /**
   * Write log to file
   */
  writeToFile(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage, 'utf8');
    } catch (error) {
      console.error(`Error writing to log file at ${this.logFile}:`, error.message);
    }
  }

  /**
   * Log info level
   */
  info(message) {
    const coloredOutput = this.getColoredOutput(this.levels.INFO, message);
    console.log(coloredOutput);
    this.writeToFile(this.levels.INFO, message);
  }

  /**
   * Log debug level
   */
  debug(message) {
    const coloredOutput = this.getColoredOutput(this.levels.DEBUG, message);
    console.log(coloredOutput);
    this.writeToFile(this.levels.DEBUG, message);
  }

  /**
   * Log warning level
   */
  warn(message) {
    const coloredOutput = this.getColoredOutput(this.levels.WARN, message);
    console.warn(coloredOutput);
    this.writeToFile(this.levels.WARN, message);
  }

  /**
   * Log error level
   */
  error(message, error = null) {
    const fullMessage = error ? `${message} - ${error.message}` : message;
    const coloredOutput = this.getColoredOutput(this.levels.ERROR, fullMessage);
    console.error(coloredOutput);
    this.writeToFile(this.levels.ERROR, fullMessage);
  }

  /**
   * Log success level
   */
  success(message) {
    const coloredOutput = this.getColoredOutput(this.levels.SUCCESS, message);
    console.log(coloredOutput);
    this.writeToFile(this.levels.SUCCESS, message);
  }

  /**
   * Log a section header
   */
  section(title) {
    const separator = '='.repeat(60);
    this.info(`\n${separator}`);
    this.info(`  ${title}`);
    this.info(`${separator}\n`);
  }

  /**
   * Get log file path
   */
  getLogFilePath() {
    return this.logFile;
  }

  /**
   * Get log directory path
   */
  getLogDirPath() {
    return this.logDir;
  }
}

// Create and export singleton instance
const logger = new Logger();

// Log that logger has been initialized
console.log(`📝 Logger initialized. Logs will be saved to: ${logger.getLogFilePath()}`);

module.exports = logger;
