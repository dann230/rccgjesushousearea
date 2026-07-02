# Push Project to GitHub

This file contains minimal instructions to push the current workspace to the remote repository at https://github.com/dann230/rccgjesushousearea

1. Initialize git (if not already):

```bash
git init
git add .
git commit -m "Initial commit: site files"
```

2. Add remote and push:

```bash
git remote add origin https://github.com/dann230/rccgjesushousearea.git
git branch -M main
git push -u origin main
```

If the remote already has commits and you need to force push (use with caution):

```bash
git push -u origin main --force
```
