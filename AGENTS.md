<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Working with Claude — standing preference (Kyle)

When a task needs access Claude does not have (DNS, hosting, email admin,
registrar, analytics, any third-party API), do BOTH of these — never just
hand back manual steps:

1. Give the manual steps as a fallback.
2. Tell the user exactly how to grant Claude the access to do it itself:
   which credential or token to create, the minimal scopes/permissions it
   needs, and where to put it (preferred: an environment variable in the
   Claude Code environment settings at claude.ai/code, so it persists
   across sessions without appearing in chat; acceptable: pasted in chat,
   then rotated afterwards).

This applies to every session in this repo, permanently.
