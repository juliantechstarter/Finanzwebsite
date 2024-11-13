module.exports = {
    testEnvironment: 'node',    // Testumgebung auf Node.js setzen
    verbose: true,              // Detaillierte Testausgaben aktivieren
    coverageDirectory: 'coverage', // Ausgabeordner für die Testabdeckung
    collectCoverage: true,      // Testabdeckung aktivieren
    testMatch: ['**/tests/**/*.test.js'], // Testdateien im tests-Ordner finden
  };
  