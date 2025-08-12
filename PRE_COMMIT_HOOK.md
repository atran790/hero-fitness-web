# Pre-Commit Hook Setup

## Overview
This project includes a pre-commit hook that automatically checks your code before each commit to prevent broken builds from being deployed.

## What it checks
1. **TypeScript Types** - Ensures all TypeScript types are valid
2. **ESLint** - Checks for linting errors
3. **Build** - Runs a full Next.js build to catch any compilation errors

## Installation

### Automatic Setup
After cloning the repository, run:
```bash
npm run setup-hooks
```

### Manual Setup
Make the pre-commit hook executable:
```bash
chmod +x .git/hooks/pre-commit
```

## How it works
When you run `git commit`, the hook will:
1. Check TypeScript types with `tsc --noEmit`
2. Run ESLint with `npm run lint`
3. Run a production build with `npm run build`

If any of these checks fail, the commit will be aborted and you'll see the specific errors to fix.

## Bypassing the hook (Emergency only!)
If you absolutely need to commit without checks (not recommended):
```bash
git commit --no-verify -m "your message"
```

## Benefits
- ✅ No more broken production builds
- ✅ Catch TypeScript errors before deployment
- ✅ Maintain code quality standards
- ✅ Save CI/CD build minutes by catching errors locally

## Troubleshooting

### Hook not running?
Make sure it's executable:
```bash
ls -la .git/hooks/pre-commit
# Should show executable permissions (x)
```

### Build taking too long?
The hook runs a full production build which can take 10-30 seconds. This is intentional to ensure your code will deploy successfully.

### Want to disable temporarily?
```bash
mv .git/hooks/pre-commit .git/hooks/pre-commit.bak
# To re-enable:
mv .git/hooks/pre-commit.bak .git/hooks/pre-commit
```
