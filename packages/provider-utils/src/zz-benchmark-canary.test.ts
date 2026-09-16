import { describe, expect, it } from 'vitest';

// On-demand failure switch for the CircleCI functions benchmark. This passes
// unless BENCHMARK_CANARY=1, so a red pipeline can be produced without editing
// any of the AI SDK's real tests.
//
// BENCHMARK_CANARY is declared on the `test` task in turbo.json for two
// reasons: turbo 2 defaults to strict env mode (undeclared vars never reach the
// task), and declaring it puts the value in the cache key so flipping it cannot
// be satisfied by a cached pass.
describe('benchmark canary', () => {
  it('fails only when BENCHMARK_CANARY=1', () => {
    expect(process.env.BENCHMARK_CANARY).not.toBe('1');
  });
});
