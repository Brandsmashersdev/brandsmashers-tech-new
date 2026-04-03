# Token-Based Search System

## Overview

The token-based search system provides flexible and partial matching for developers and jobs, similar to LinkedIn's search functionality. It splits search queries into individual tokens (words) and matches them against multiple fields using OR logic.

## Features

- **Token-based matching**: Splits queries into individual words for flexible searching
- **OR logic**: Matches if ANY token matches ANY field
- **Partial matching**: Supports substring matching within words
- **Multi-field search**: Searches across name, role, bio, and skills
- **Relevance scoring**: Sorts results by relevance for better user experience

## How It Works

### 1. Tokenization

The search query is split into individual tokens (words) and converted to lowercase:

```javascript
"react node js developer" → ["react", "node", "js", "developer"]
```

### 2. Field Matching

Each token is checked against multiple fields:

- **Name**: Developer's name
- **Role**: Job role/title
- **Bio**: Developer's biography
- **Skills**: Array of skills

### 3. OR Logic

A developer/job is included in results if **ANY** token matches **ANY** field:

```
Query: "react node js developer"

Matches:
- Developer with "React" in skills ✓
- Developer with "Node.js" in skills ✓
- Developer with "Developer" in role ✓
- Developer with "JavaScript" in skills ✓
```

### 4. Partial Matching

The system supports flexible matching:

- **Exact substring**: "react" matches "React Developer"
- **Partial word**: "dev" matches "Developer"
- **Token within word**: "script" matches "JavaScript"

## Usage

### Basic Search

```javascript
import { searchDevelopersByTokens } from '@/utils/tokenSearch';

const developers = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    bio: "Passionate MERN stack developer"
  },
  // ... more developers
];

// Search with multiple tokens
const results = searchDevelopersByTokens(developers, "react node js developer");
```

### Job Search

```javascript
import { searchJobsByTokens } from '@/utils/tokenSearch';

const jobs = [
  {
    id: "REQ001",
    title: "React Developer",
    skills: ["React", "JavaScript", "TypeScript"]
  },
  // ... more jobs
];

const results = searchJobsByTokens(jobs, "react typescript");
```

### Sorted Results by Relevance

```javascript
import { searchAndSortDevelopers } from '@/utils/tokenSearch';

// Results are sorted by relevance score
const sortedResults = searchAndSortDevelopers(developers, "react developer");
```

## API Reference

### `tokenizeQuery(query)`

Splits a search query into tokens.

**Parameters:**
- `query` (string): The search query

**Returns:**
- `string[]`: Array of lowercase tokens

**Example:**
```javascript
tokenizeQuery("React Node.js Developer")
// Returns: ["react", "node.js", "developer"]
```

### `tokenMatchesField(token, fieldValue)`

Checks if a token matches a field value using partial matching.

**Parameters:**
- `token` (string): The token to search for
- `fieldValue` (string): The field value to search in

**Returns:**
- `boolean`: True if token matches

**Example:**
```javascript
tokenMatchesField("react", "React Developer") // true
tokenMatchesField("dev", "Developer") // true
tokenMatchesField("python", "React Developer") // false
```

### `tokenMatchesSkills(token, skills)`

Checks if a token matches any skill in the skills array.

**Parameters:**
- `token` (string): The token to search for
- `skills` (string[]): Array of skills

**Returns:**
- `boolean`: True if token matches any skill

**Example:**
```javascript
tokenMatchesSkills("react", ["React", "Node.js"]) // true
tokenMatchesSkills("node", ["React", "Node.js"]) // true
```

### `searchDevelopersByTokens(developers, query)`

Searches developers using token-based matching with OR logic.

**Parameters:**
- `developers` (Object[]): Array of developer objects
- `query` (string): Search query

**Returns:**
- `Object[]`: Filtered array of developers

**Example:**
```javascript
const results = searchDevelopersByTokens(developers, "react node js");
```

### `searchJobsByTokens(jobs, query)`

Searches jobs using token-based matching with OR logic.

**Parameters:**
- `jobs` (Object[]): Array of job objects
- `query` (string): Search query

**Returns:**
- `Object[]`: Filtered array of jobs

### `calculateDeveloperRelevanceScore(developer, tokens)`

Calculates relevance score for sorting results.

**Parameters:**
- `developer` (Object): Developer object
- `tokens` (string[]): Array of search tokens

**Returns:**
- `number`: Relevance score (higher = more relevant)

**Scoring:**
- Name match: +10 points
- Role match: +8 points
- Skill match: +5 points
- Bio match: +3 points

### `searchAndSortDevelopers(developers, query)`

Searches and sorts developers by relevance.

**Parameters:**
- `developers` (Object[]): Array of developer objects
- `query` (string): Search query

**Returns:**
- `Object[]`: Filtered and sorted array of developers

## Examples

### Example 1: Simple Search

```javascript
// Query: "react"
// Matches developers with "React" in name, role, skills, or bio
const results = searchDevelopersByTokens(developers, "react");
```

### Example 2: Multi-token Search

```javascript
// Query: "react node js developer"
// Matches developers with ANY of: react, node, js, developer
const results = searchDevelopersByTokens(developers, "react node js developer");
```

### Example 3: Partial Matching

```javascript
// Query: "dev"
// Matches "Developer", "Development", etc.
const results = searchDevelopersByTokens(developers, "dev");
```

### Example 4: Case Insensitive

```javascript
// Query: "REACT NODE"
// Matches "react", "React", "REACT", etc.
const results = searchDevelopersByTokens(developers, "REACT NODE");
```

## Integration with Marketplace

The token-based search system is integrated into the marketplace page:

```javascript
// In marketplace.jsx
import { searchDevelopersByTokens, searchJobsByTokens } from '@/utils/tokenSearch';

// Filter developers
if (debouncedSearchQuery && debouncedSearchQuery.trim()) {
  filtered = searchDevelopersByTokens(filtered, debouncedSearchQuery);
}

// Filter jobs
if (jobSearchQuery && jobSearchQuery.trim()) {
  const filtered = searchJobsByTokens(jobsData, jobSearchQuery);
}
```

## Testing

The token-based search system includes comprehensive tests:

```bash
npm test -- src/utils/__tests__/tokenSearch.test.js
```

All 32 tests pass, covering:
- Tokenization
- Field matching
- Skill matching
- Developer search
- Job search
- Relevance scoring
- Sorted results

## Benefits

1. **Flexible Search**: Users can search with multiple keywords
2. **Partial Matching**: Finds results even with incomplete terms
3. **OR Logic**: Broadens search results for better discoverability
4. **Relevance Sorting**: Most relevant results appear first
5. **LinkedIn-like Experience**: Familiar search behavior for users

## Future Enhancements

Potential improvements for the token-based search system:

1. **Fuzzy Matching**: Handle typos and misspellings
2. **Synonyms**: Match related terms (e.g., "JS" = "JavaScript")
3. **Weighted Fields**: Allow customization of field importance
4. **Search History**: Remember recent searches
5. **Auto-suggestions**: Suggest search terms as user types
6. **Advanced Filters**: Combine token search with filters
