declare global {
    namespace NodeJS {
      interface ProcessEnv {
        BACKEND_URL: string;
        ACCOUNT_URL: string;
        NODE_ENV: 'development' | 'production';
        HOST: string;
        PORT: number;
      }
    }
  }
  export {}