# Next tasks

## 1. Cross-post blog content from `C:\Source\Blog`

Goal: keep the DeltaXY website blog in sync with the source blog content without manual copy/paste.

### Proposed implementation
- Treat `C:\Source\Blog` as the upstream content source
- Add a sync/import script in this repo, e.g. `npm run sync:blog`
- Import only published posts
- Normalize frontmatter/metadata:
  - title
  - slug
  - date
  - excerpt
  - tags/category
  - canonical/source URL if needed
- Copy required images/assets into this repo
- Store imported content in a repo-local content directory for stable deploys
- Render imported posts in `/blog`

### Notes
- Do not rely on `C:\Source\Blog` at runtime
- Sync into this repo before deploy
- Keep room for selective publishing if some source posts should not appear on DeltaXY
