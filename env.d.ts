declare global {
  namespace NodeJS {
    interface ProcessEnv {
      port?: number;
    }
  }
}

export {};
