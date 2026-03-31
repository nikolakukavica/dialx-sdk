# AI SDK - DIALX OpenAI Provider

The **[DIALX provider] is based on [Azure provider](https://ai-sdk.dev/providers/ai-sdk-providers/azure)** for the [AI SDK](https://ai-sdk.dev/docs) contains language model support for the DIALX OpenAI API.

## Setup

The DIALX provider is available in the `@kuka/dialx-sdk` module. You can install it with

```bash
npm i @kuka/dialx-sdk
```

## Skill for Coding Agents

If you use coding agents such as Claude Code or Cursor, we highly recommend adding the AI SDK skill to your repository:

```shell
npx skills add vercel/ai
```

## Provider Instance

You can import the default provider instance `dialx` from `@kuka/dialx-sdk`:

```ts
import { dialx } from '@kuka/dialx-sdk';
```

## Example

```ts
import { dialx } from '@kuka/dialx-sdk';
import { generateText } from 'ai';

const { text } = await generateText({
  model: dialx('gpt-4o'), // your deployment name
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

## Documentation

Please check out the **[Azure provider](https://ai-sdk.dev/providers/ai-sdk-providers/azure)** for more information.
