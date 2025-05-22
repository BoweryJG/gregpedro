# n8n Workflows

This directory contains an example workflow for integrating with the [OpenRouter](https://openrouter.ai/) API using [n8n](https://n8n.io/).

## Environment Variable

The workflow expects an environment variable named `OPENROUTER_API_KEY` to be available in your n8n instance. Set this variable with your OpenRouter API key before executing the workflow.

## Importing the Workflow

1. Open your n8n editor UI.
2. Click on **Workflow** > **Import from file**.
3. Select `openrouter-workflow.json` from this directory.
4. Save the workflow and execute it. The `Prompt` and `Model` nodes allow you to adjust the message and model name before sending the request.

The HTTP Request node uses the expression `{{$env.OPENROUTER_API_KEY}}` so no key is stored in the workflow file.
