import {
  ResponsesProviderMetadata,
  ResponsesReasoningProviderMetadata,
  ResponsesSourceDocumentProviderMetadata,
  ResponsesTextProviderMetadata,
} from '@ai-sdk/openai/internal';

export type DialxResponsesProviderMetadata = {
  azure: ResponsesProviderMetadata;
};

export type DialxResponsesReasoningProviderMetadata = {
  azure: ResponsesReasoningProviderMetadata;
};

export type DialxResponsesTextProviderMetadata = {
  azure: ResponsesTextProviderMetadata;
};

export type DialxResponsesSourceDocumentProviderMetadata = {
  azure: ResponsesSourceDocumentProviderMetadata;
};
