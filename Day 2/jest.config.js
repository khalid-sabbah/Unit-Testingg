
module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',  
  },
  testEnvironment: 'jest-environment-jsdom',  
  moduleFileExtensions: ['js', 'jsx'],
};
