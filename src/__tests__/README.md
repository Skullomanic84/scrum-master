# Testing Guide

This directory contains all the test files for the Scrum Master application.

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests in watch mode

```bash
npm run test:watch
```

### Generate coverage report

```bash
npm run test:coverage
```

## Test Structure

```
__tests__/
├── routes/           # Route handler tests
├── controllers/      # Controller tests
├── utils/            # Utility function tests
└── models/           # Model tests
```

## Writing Tests

### Example Test Structure

```javascript
import { describe, it, expect } from '@jest/globals';

describe('Feature Name', () => {
  it('should do something', () => {
    // Arrange
    const input = 'test';

    // Act
    const result = someFunction(input);

    // Assert
    expect(result).toBe('expected');
  });
});
```

## Best Practices

1. **Use descriptive test names** - Test names should clearly describe what is being tested
2. **Follow AAA pattern** - Arrange, Act, Assert
3. **Test one thing at a time** - Each test should focus on a single behavior
4. **Mock external dependencies** - Use mocks for database calls, API requests, etc.
5. **Aim for high coverage** - Target at least 80% code coverage

## Coverage Goals

- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%
