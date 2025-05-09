# Contributing to JSON and Excel Converter

First off, thank you for considering contributing to this project! It's people like you that make this tool better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots if possible
- Specify which conversion direction (JSON to Excel or Excel to JSON) is affected

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples of how the feature would work
- Describe the current behavior and explain how your feature would change it
- Explain why this enhancement would be useful
- Specify if the enhancement is for JSON to Excel, Excel to JSON, or both

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the JavaScript styleguide
- Include proper test cases for both conversion directions
- End all files with a newline
- Avoid platform-dependent code
- Update documentation if necessary

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/json-excel-converter.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. Make your changes
6. Run tests:
   ```bash
   npm test
   ```
7. Submit a pull request

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Include the conversion direction in the commit message if relevant

### JavaScript Styleguide

- Use 2 spaces for indentation
- Use camelCase for variables and functions
- Use PascalCase for classes
- Add documentation comments for public functions
- Prefer template literals over string concatenation
- Use meaningful variable names
- Include JSDoc comments for all public functions

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues for bugs in the code
* `documentation` - Issues for improving or adding to documentation
* `enhancement` - Issues for new features or improvements
* `help-wanted` - Issues that need help from the community
* `wontfix` - Issues that will not be worked on
* `json-to-excel` - Issues related to JSON to Excel conversion
* `excel-to-json` - Issues related to Excel to JSON conversion

### Testing

When adding new features or fixing bugs, please ensure that:
1. Both conversion directions (JSON to Excel and Excel to JSON) are tested
2. Edge cases are handled appropriately
3. Error messages are clear and helpful
4. Documentation is updated to reflect any changes