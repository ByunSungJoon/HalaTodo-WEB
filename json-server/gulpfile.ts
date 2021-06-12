import { series } from 'gulp'

import './tasks'

/**
 * @title json-server start
 */
export const dev = series(
  // "NODE_ENV='development'",
  "run json-server",
)
/**
 * @title json-server start ( readOnly )
 */
export const devReadOnly = series(
  // "NODE_ENV='development'",
  "run json-server read-only",
)

/**
 * @title generate seed data
 */
export const devSeed = series(
  "generate seed data"
)

/**
 * @title cleanup db.json and generate seed data 
 */
export const devSeedClean = series(
  "cleanup seed data",
  "generate seed data"
)

