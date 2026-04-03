import {
  tokenizeQuery,
  tokenMatchesField,
  tokenMatchesSkills,
  searchDevelopersByTokens,
  searchJobsByTokens,
  calculateDeveloperRelevanceScore,
  searchAndSortDevelopers
} from '../tokenSearch';

describe('tokenSearch utility', () => {
  describe('tokenizeQuery', () => {
    it('should split query into tokens', () => {
      expect(tokenizeQuery('react node js developer')).toEqual(['react', 'node', 'js', 'developer']);
    });

    it('should handle multiple spaces', () => {
      expect(tokenizeQuery('react   node   js')).toEqual(['react', 'node', 'js']);
    });

    it('should convert to lowercase', () => {
      expect(tokenizeQuery('React Node JS')).toEqual(['react', 'node', 'js']);
    });

    it('should filter out empty strings', () => {
      expect(tokenizeQuery('  react  node  ')).toEqual(['react', 'node']);
    });

    it('should return empty array for empty query', () => {
      expect(tokenizeQuery('')).toEqual([]);
      expect(tokenizeQuery(null)).toEqual([]);
      expect(tokenizeQuery(undefined)).toEqual([]);
    });
  });

  describe('tokenMatchesField', () => {
    it('should match exact substring', () => {
      expect(tokenMatchesField('react', 'React Developer')).toBe(true);
    });

    it('should match partial word', () => {
      expect(tokenMatchesField('dev', 'Developer')).toBe(true);
    });

    it('should match token within field word', () => {
      expect(tokenMatchesField('script', 'JavaScript')).toBe(true);
    });

    it('should not match when token is not present', () => {
      expect(tokenMatchesField('python', 'React Developer')).toBe(false);
    });

    it('should handle null or undefined values', () => {
      expect(tokenMatchesField('react', null)).toBe(false);
      expect(tokenMatchesField('react', undefined)).toBe(false);
    });
  });

  describe('tokenMatchesSkills', () => {
    it('should match skill exactly', () => {
      expect(tokenMatchesSkills('react', ['React', 'Node.js'])).toBe(true);
    });

    it('should match partial skill', () => {
      expect(tokenMatchesSkills('node', ['React', 'Node.js'])).toBe(true);
    });

    it('should match token within skill', () => {
      expect(tokenMatchesSkills('script', ['JavaScript', 'TypeScript'])).toBe(true);
    });

    it('should not match when skill is not present', () => {
      expect(tokenMatchesSkills('python', ['React', 'Node.js'])).toBe(false);
    });

    it('should handle null or undefined skills array', () => {
      expect(tokenMatchesSkills('react', null)).toBe(false);
      expect(tokenMatchesSkills('react', undefined)).toBe(false);
    });
  });

  describe('searchDevelopersByTokens', () => {
    const developers = [
      {
        id: 1,
        name: 'Rahul Sharma',
        role: 'Full Stack Developer',
        skills: ['React', 'Node.js', 'MongoDB'],
        bio: 'Passionate MERN stack developer'
      },
      {
        id: 2,
        name: 'Priya Patel',
        role: 'Frontend Developer',
        skills: ['React', 'TypeScript', 'Next.js'],
        bio: 'Creative frontend developer'
      },
      {
        id: 3,
        name: 'Amit Kumar',
        role: 'Backend Developer',
        skills: ['Node.js', 'Python', 'Django'],
        bio: 'Expert backend developer'
      }
    ];

    it('should return all developers when query is empty', () => {
      expect(searchDevelopersByTokens(developers, '')).toEqual(developers);
      expect(searchDevelopersByTokens(developers, null)).toEqual(developers);
    });

    it('should match single token against name', () => {
      const result = searchDevelopersByTokens(developers, 'rahul');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Rahul Sharma');
    });

    it('should match single token against role', () => {
      const result = searchDevelopersByTokens(developers, 'frontend');
      expect(result).toHaveLength(1);
      expect(result[0].role).toBe('Frontend Developer');
    });

    it('should match single token against skills', () => {
      const result = searchDevelopersByTokens(developers, 'react');
      expect(result).toHaveLength(2);
    });

    it('should match single token against bio', () => {
      const result = searchDevelopersByTokens(developers, 'passionate');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Rahul Sharma');
    });

    it('should use OR logic for multiple tokens', () => {
      // Search for "react node" should match developers with EITHER react OR node
      const result = searchDevelopersByTokens(developers, 'react node');
      expect(result).toHaveLength(3); // All developers have either react or node
    });

    it('should match partial tokens', () => {
      const result = searchDevelopersByTokens(developers, 'dev');
      expect(result).toHaveLength(3); // All have "Developer" in role
    });

    it('should handle complex query like "react node js developer"', () => {
      const result = searchDevelopersByTokens(developers, 'react node js developer');
      // Should match developers with react, node, js, or developer
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('searchJobsByTokens', () => {
    const jobs = [
      {
        id: 'REQ001',
        title: 'React Developer',
        skills: ['React', 'JavaScript', 'TypeScript']
      },
      {
        id: 'REQ002',
        title: 'Node.js Backend Developer',
        skills: ['Node.js', 'Express', 'MongoDB']
      },
      {
        id: 'REQ003',
        title: 'Full Stack Developer',
        skills: ['React', 'Node.js', 'MongoDB']
      }
    ];

    it('should return all jobs when query is empty', () => {
      expect(searchJobsByTokens(jobs, '')).toEqual(jobs);
    });

    it('should match token against title', () => {
      const result = searchJobsByTokens(jobs, 'react');
      expect(result).toHaveLength(2);
    });

    it('should match token against id', () => {
      const result = searchJobsByTokens(jobs, 'req001');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('REQ001');
    });

    it('should match token against skills', () => {
      const result = searchJobsByTokens(jobs, 'javascript');
      expect(result).toHaveLength(1);
    });

    it('should use OR logic for multiple tokens', () => {
      const result = searchJobsByTokens(jobs, 'react node');
      expect(result).toHaveLength(3); // All jobs have either react or node
    });
  });

  describe('calculateDeveloperRelevanceScore', () => {
    const developer = {
      name: 'React Developer',
      role: 'Frontend Developer',
      skills: ['React', 'JavaScript'],
      bio: 'Passionate developer'
    };

    it('should return 0 for empty tokens', () => {
      expect(calculateDeveloperRelevanceScore(developer, [])).toBe(0);
    });

    it('should give higher score for name matches', () => {
      const score = calculateDeveloperRelevanceScore(developer, ['react']);
      expect(score).toBeGreaterThan(0);
    });

    it('should accumulate scores for multiple token matches', () => {
      const score1 = calculateDeveloperRelevanceScore(developer, ['react']);
      const score2 = calculateDeveloperRelevanceScore(developer, ['react', 'frontend']);
      expect(score2).toBeGreaterThan(score1);
    });
  });

  describe('searchAndSortDevelopers', () => {
    const developers = [
      {
        id: 1,
        name: 'React Expert',
        role: 'Frontend Developer',
        skills: ['React', 'JavaScript'],
        bio: 'React specialist'
      },
      {
        id: 2,
        name: 'John Doe',
        role: 'React Developer',
        skills: ['React', 'Node.js'],
        bio: 'Full stack developer'
      }
    ];

    it('should return sorted results by relevance', () => {
      const result = searchAndSortDevelopers(developers, 'react');
      expect(result).toHaveLength(2);
      // React Expert should be first due to name match
      expect(result[0].name).toBe('React Expert');
    });
  });
});
