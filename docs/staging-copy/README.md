# Beverly staging copy

This branch (`ttr-staging-copy`) is a full copy of the production branch `claude/beverly-hills-dental-rebuild-fbqh3o`, kept only so Vercel builds one stable preview of the whole site (with the TTR editing bar, preview builds only). It is not the live site and nothing from it goes live.

To bring it up to date with production: `git checkout ttr-staging-copy && git merge origin/claude/beverly-hills-dental-rebuild-fbqh3o && git push`. Never merge this branch into production.

(Dry-run check for TTR-1940 ran on this branch on Nov 13, 2026.)
