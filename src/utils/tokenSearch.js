/**
 * Token-based search utility for flexible and partial matching
 * Similar to LinkedIn search functionality
 */

/**
 * Tokenize a search query by splitting on spaces and filtering out empty strings
 * @param {string} query - The search query to tokenize
 * @returns {string[]} - Array of tokens (lowercase, trimmed)
 */
export function tokenizeQuery(query) {
  if (!query || typeof query !== 'string') {
    return [];
  }
  
  return query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(token => token.length > 0);
}

/**
 * Check if a token matches a field value using partial matching
 * @param {string} token - The token to search for
 * @param {string} fieldValue - The field value to search in
 * @returns {boolean} - True if token matches (partial match)
 */
export function tokenMatchesField(token, fieldValue) {
  if (!fieldValue || typeof fieldValue !== 'string') {
    return false;
  }
  
  const lowerFieldValue = fieldValue.toLowerCase();
  
  // Exact match
  if (lowerFieldValue.includes(token)) {
    return true;
  }
  
  // Partial match - check if token is a substring of any word in the field
  const fieldWords = lowerFieldValue.split(/\s+/);
  return fieldWords.some(word => word.includes(token) || token.includes(word));
}

/**
 * Check if a token matches any skill in the skills array
 * @param {string} token - The token to search for
 * @param {string[]} skills - Array of skills to search in
 * @returns {boolean} - True if token matches any skill
 */
export function tokenMatchesSkills(token, skills) {
  if (!skills || !Array.isArray(skills)) {
    return false;
  }
  
  return skills.some(skill => {
    if (!skill || typeof skill !== 'string') {
      return false;
    }
    
    const lowerSkill = skill.toLowerCase();
    
    // Exact match
    if (lowerSkill.includes(token)) {
      return true;
    }
    
    // Partial match - check if token is a substring of the skill or vice versa
    const skillWords = lowerSkill.split(/\s+/);
    return skillWords.some(word => word.includes(token) || token.includes(word));
  });
}

/**
 * Search developers using token-based matching with OR logic
 * Matches tokens against name, role, bio, and skills
 * @param {Object[]} developers - Array of developer objects
 * @param {string} query - Search query (can contain multiple tokens)
 * @returns {Object[]} - Filtered array of developers
 */
export function searchDevelopersByTokens(developers, query) {
  if (!query || !query.trim()) {
    return developers;
  }
  
  const tokens = tokenizeQuery(query);
  
  if (tokens.length === 0) {
    return developers;
  }
  
  return developers.filter(developer => {
    // Check if ANY token matches ANY field (OR logic)
    return tokens.some(token => {
      // Check name
      if (tokenMatchesField(token, developer.name)) {
        return true;
      }
      
      // Check role
      if (tokenMatchesField(token, developer.role)) {
        return true;
      }
      
      // Check bio
      if (tokenMatchesField(token, developer.bio)) {
        return true;
      }
      
      // Check skills
      if (tokenMatchesSkills(token, developer.skills)) {
        return true;
      }
      
      return false;
    });
  });
}

/**
 * Search jobs using token-based matching with OR logic
 * Matches tokens against title, id, and skills
 * @param {Object[]} jobs - Array of job objects
 * @param {string} query - Search query (can contain multiple tokens)
 * @returns {Object[]} - Filtered array of jobs
 */
export function searchJobsByTokens(jobs, query) {
  if (!query || !query.trim()) {
    return jobs;
  }
  
  const tokens = tokenizeQuery(query);
  
  if (tokens.length === 0) {
    return jobs;
  }
  
  return jobs.filter(job => {
    // Check if ANY token matches ANY field (OR logic)
    return tokens.some(token => {
      // Check title
      if (tokenMatchesField(token, job.title)) {
        return true;
      }
      
      // Check id
      if (tokenMatchesField(token, job.id)) {
        return true;
      }
      
      // Check skills
      if (tokenMatchesSkills(token, job.skills)) {
        return true;
      }
      
      return false;
    });
  });
}

/**
 * Calculate relevance score for sorting results
 * Higher score = more relevant match
 * @param {Object} developer - Developer object
 * @param {string[]} tokens - Array of search tokens
 * @returns {number} - Relevance score
 */
export function calculateDeveloperRelevanceScore(developer, tokens) {
  if (!tokens || tokens.length === 0) {
    return 0;
  }
  
  let score = 0;
  
  tokens.forEach(token => {
    // Name matches get highest score
    if (tokenMatchesField(token, developer.name)) {
      score += 10;
    }
    
    // Role matches get high score
    if (tokenMatchesField(token, developer.role)) {
      score += 8;
    }
    
    // Skill matches get medium score
    if (tokenMatchesSkills(token, developer.skills)) {
      score += 5;
    }
    
    // Bio matches get lower score
    if (tokenMatchesField(token, developer.bio)) {
      score += 3;
    }
  });
  
  return score;
}

/**
 * Search and sort developers by relevance
 * @param {Object[]} developers - Array of developer objects
 * @param {string} query - Search query
 * @returns {Object[]} - Filtered and sorted array of developers
 */
export function searchAndSortDevelopers(developers, query) {
  const filtered = searchDevelopersByTokens(developers, query);
  const tokens = tokenizeQuery(query);
  
  // Sort by relevance score (descending)
  return filtered.sort((a, b) => {
    const scoreA = calculateDeveloperRelevanceScore(a, tokens);
    const scoreB = calculateDeveloperRelevanceScore(b, tokens);
    return scoreB - scoreA;
  });
}
