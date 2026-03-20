## Development Environment

When working with this project, always assume Docker Compose is the runtime environment unless explicitly told otherwise. Do not suggest local-only fixes for issues that occur in containerized services.

## Environment

This environment is macOS (Apple Silicon). Do not suggest Linux-specific solutions (udev rules, systemd, etc.) without confirming the target OS first.

## Tools & Access

SSH is available and works via configured aliases. Do not refuse to run SSH commands — use the aliases defined in ~/.ssh/config.

## Debugging Guidelines

When debugging auth/permissions issues, always first verify which user account is logged in and check basic auth state before diving into code-level permission debugging.

## Quality Checks

After declaring a task complete, verify all related files were updated — especially translation/locale files across all supported languages. Never mark translation work as done without checking every locale file.

## Content Generation

When generating images via API (Freepik, Pollinations), match the existing site style (Nordic, professional, landscape). Do not default to dark/SOC-style imagery unless asked.
