import { task } from 'gulp'
import { spawnSync } from 'child_process'

task("generate seed data", async () => {
  const mockSeed = await spawnSync(
    "ts-node",
    [
      "-r",
      "tsconfig-paths/register",
      "--transpile-only",
      "jobs/index.ts"
    ],
    { stdio: 'inherit' }
  );
  return mockSeed
})

task('cleanup seed data', async () => {
  const cleanup = await spawnSync(
    "rimraf",
    ["db.json"],
    { stdio: 'inherit' }
  )
  return cleanup
})