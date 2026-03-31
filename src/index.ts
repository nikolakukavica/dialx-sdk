export type {
  OpenAILanguageModelResponsesOptions,
  /** @deprecated Use `OpenAILanguageModelResponsesOptions` instead. */
  OpenAILanguageModelResponsesOptions as OpenAIResponsesProviderOptions,
  OpenAILanguageModelChatOptions,
  /** @deprecated Use `OpenAILanguageModelChatOptions` instead. */
  OpenAILanguageModelChatOptions as OpenAIChatLanguageModelOptions,
} from '@ai-sdk/openai';

export { dialx, createDialx } from './dialx-openai-provider';
export type {
  DialxOpenAIProvider,
  DialxOpenAIProviderSettings,
} from './dialx-openai-provider';
export type {
  DialxResponsesProviderMetadata,
  DialxResponsesReasoningProviderMetadata,
  DialxResponsesTextProviderMetadata,
  DialxResponsesSourceDocumentProviderMetadata,
} from './dialx-openai-provider-metadata';
export { VERSION } from './version';
