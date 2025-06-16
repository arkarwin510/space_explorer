/**
 * Injection token for the environment configuration
 * @example
 * ```typescript
 * constructor(@Inject(ENVIRONMENT) private env: Environment) {}
 * ```
 */
export const ENVIRONMENT = 'ENV' as const;
