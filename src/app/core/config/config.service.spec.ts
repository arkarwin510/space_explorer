import { ConfigService, Environment } from './config.service';

// Mock the environment
const mockEnvironment: Environment = {
  production: false,
  nasaApiKey: 'test-api-key-123'
};

// Helper function to create a test environment
function createTestEnv(override: Partial<Environment>): Environment {
  return { ...mockEnvironment, ...override };
}

describe('ConfigService', () => {
  describe('Basic functionality', () => {
    it('should be created with valid API key', () => {
      const service = new ConfigService(mockEnvironment);
      expect(service).toBeTruthy();
    });

    it('should return the configured API key', () => {
      const service = new ConfigService(mockEnvironment);
      expect(service.apiKey).toBe(mockEnvironment.nasaApiKey);
    });
  });

  describe('when NASA API key is not configured', () => {
    it('should throw an error during construction with empty string', () => {
      const env = createTestEnv({ nasaApiKey: '' });
      expect(() => new ConfigService(env as Environment))
        .toThrowError('NASA API key is not configured in environment.ts');
    });

    it('should throw an error during construction with undefined', () => {
      const env = { ...mockEnvironment };
      delete (env as any).nasaApiKey;
      expect(() => new ConfigService(env as Environment))
        .toThrowError('NASA API key is not configured in environment.ts');
    });

    it('should throw an error during construction with null', () => {
      const env = createTestEnv({ nasaApiKey: null as unknown as string });
      expect(() => new ConfigService(env as Environment))
        .toThrowError('NASA API key is not configured in environment.ts');
    });
  });
});
