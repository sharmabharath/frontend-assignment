
# SAASLab - Frontend Assignment

## Description
This project displays a list of highly-rated Kickstarter projects. It fetches project data from a web API, displays it in a paginated table, and includes accessibility and theming features (light and dark mode). The goal was to meet the assignment requirements with a clean and user-friendly UI.

## Live Demo


Hosted at Github Pages.

## Assignment Requirements
The project was built to satisfy the following requirements:

1. Fetch details of highly-rated Kickstarter projects from a web API.
2. Display the following attributes in a table:
   - **S.No.**
   - **Percentage Funded**
   - **Amount Pledged**
3. Paginate the data with a maximum of 5 records per page.
4. Use raw CSS for styling (no CSS frameworks).
5. Host the project online and submit both the repository and hosted URL.
6. Implement accessibility and an aesthetically pleasing UI for extra points.

## Folder Structure
The following structure outlines the organization of the project:


```
/src
  ├── assets
  │   └── icons.js
  ├── components
  │   ├── DarkModeToggle.js
  │   ├── MainContainer.js
  │   ├── Pagination.js
  │   ├── SearchBar.js
  │   └── Table.js
  ├── context
  │   └── ThemeContext.js
  ├── hooks
  │   └── useDebounce.js
  ├── services
  │   └── apisService.js
  ├── styles
  │   ├── main.css
  │   └── table.css
  └── tests
      ├── DarkModeToggle.test.js
      └── Table.test.js

```

## Testing
This project uses **React Testing Library** and **Jest** for unit testing. To run tests, use:

```bash
npm test
```

### Test Summary:
**Area:** Model
**Scenarios Covered:**
- **Valid Data:** Confirms that API data is accurately converted into a format compatible with the table UI.
- **Invalid Page Numbers:** Verifies that the system correctly handles boundary conditions for invalid page numbers (e.g., `0`, or numbers outside the valid range).
- **Malformed or Empty Data:** Ensures that malformed or missing API data results in graceful handling, such as returning empty results or displaying a fallback UI.
- **Dark Mode Toggle:** Ensures proper functioning of the DarkModeToggle component, verifying UI state changes based on toggle actions.
- **Pagination Logic:** Tests that the Pagination component handles scenarios like disabling buttons for the first/last page and calculating page ranges accurately.

**Tools Used:**
- Jest (for unit tests)
- React Testing Library (for component-level testing)

**Area:** Components
**Scenarios Covered:**
    -   **Context-Driven Rendering:** Confirms that components render appropriate data and styles based on provided contexts:
        -   **Theme Context (Light/Dark):** Validates dynamic theme application to UI elements.
        -   **Page Context:** Ensures proper data rendering for different pages.
    -   **UI Element Content:** Checks table data accuracy against the expected results for given inputs.
**Tools Used:** React Testing Library, Jest

## Technologies Used
- **React** (Frontend Framework)
- **Raw CSS** (Styling)
- **React Testing Library** (Testing)
- **Jest** (Unit Tests)

## Challenges and Improvements

### Challenges
- More test cases could be covered.

### Potential Improvements
- Add search and filter features to enhance usability.
- Optimize performance for large datasets.

## Author
**Bharath Sharma**
[Github](https://github.com/sharmabharath)
[Linkedin](https://www.linkedin.com/in/p-sai-bharat-sarma-477675150/)
