# Monorepo

## Problem
1. less variable not recognized in a specific monorepo.

## Reproduce steps
1. clone this repo
2. execute ```yarn bootstrap``` in project root
3. view this file [./apps/proa/src/index.less](./apps/proa/src/index.less), you can see @padding-md variable with a warning "can't find variable padding-md".
4. open [./packages/utils/package.json](./packages/utils/package.json), then empty the dependencies content (keep this field).
5. view this file [./apps/proa/src/index.less](./apps/proa/src/index.less) again, the intellisense comes back (if not, try to restart your webstorm, and view this file again).

This problem was discovered about a year ago, and has not been repaired so far.Both windows and mac platforms can be reproduced.
