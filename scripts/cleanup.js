#!/usr/bin/env node

/**
 * Cleanup script
 * Removes test artifacts before running tests
 */

const fs = require('fs');
const path = require('path');

const dirsToClean = [
  './test-results',
  './playwright-report',
  './logs/*.log'
];

console.log('🧹 Cleaning up test artifacts...\n');

dirsToClean.forEach(dir => {
  try {
    if (dir.includes('*')) {
      // Handle glob patterns like logs/*.log
      const dirPath = path.dirname(dir);
      const pattern = path.basename(dir);
      
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
          if (file.match(pattern.replace('*', '.*'))) {
            const filePath = path.join(dirPath, file);
            fs.unlinkSync(filePath);
            console.log(`  ✓ Deleted: ${filePath}`);
          }
        });
      }
    } else {
      // Handle directories
      if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
        console.log(`  ✓ Deleted: ${dir}`);
      }
    }
  } catch (error) {
    console.error(`  ✗ Error cleaning ${dir}:`, error.message);
  }
});

console.log('\n✅ Cleanup completed!\n');
