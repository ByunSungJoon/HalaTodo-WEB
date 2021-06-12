import { task } from 'gulp'
import { spawnSync } from 'child_process'

task("run json-server", async () => {
  const server = await spawnSync(
    "json-server",
    [
      "--watch",
      "db.json",
      // "--middlewares",
      // "middlewares",
      "--routes",
      "routes.json",
      "--port",
      "3001",
    ],
    { stdio: "inherit" },
  )
  return server
})
task("run json-server read-only", async () => {
  const server = await spawnSync(
    "json-server",
    [
      "--watch",
      "db.json",
      // "--middlewares",
      // "middlewares",
      "--routes",
      "routes.json",
      "--read-only",
      "--port",
      "3001",
    ],
    { stdio: "inherit" },
  )
  return server
})