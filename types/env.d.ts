declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_ID: string;
      NEXT_PUBLIC_AI_API_ENDPOINT: string;
      NEXT_PUBLIC_AI_API_KEY: string;
    }
  }
}

export {} 