#!/bin/bash
# Appends user prompts to PROMPTS.md with ISO 8601 timestamps
# This hook runs on UserPromptSubmit and logs all prompts

# Determine project directory (use CLAUDE_PROJECT_DIR if set, otherwise derive from script location)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(dirname "$(dirname "$SCRIPT_DIR")")}"
PROMPTS_FILE="${PROJECT_DIR}/PROMPTS.md"

# Read JSON input from stdin
input=$(cat)

# Extract the prompt using jq
prompt=$(echo "$input" | jq -r '.prompt // empty')

# Validate that we got a prompt
if [ -z "$prompt" ]; then
  exit 0  # No prompt to log, continue normally
fi

# Get current ISO 8601 timestamp
timestamp=$(date -u '+%Y-%m-%dT%H:%M:%SZ')

# Append to PROMPTS.md
{
  echo ""
  echo "---"
  echo ""
  echo "## $timestamp"
  echo ""
  echo "$prompt"
} >> "$PROMPTS_FILE"

# Exit successfully without blocking the prompt
exit 0
