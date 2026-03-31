import {
  codeInterpreter,
  fileSearch,
  imageGeneration,
  webSearchPreview,
} from '@ai-sdk/openai/internal';

export const dialxOpenaiTools: {
  codeInterpreter: typeof codeInterpreter;
  fileSearch: typeof fileSearch;
  imageGeneration: typeof imageGeneration;
  webSearchPreview: typeof webSearchPreview;
} = {
  codeInterpreter,
  fileSearch,
  imageGeneration,
  webSearchPreview,
};
