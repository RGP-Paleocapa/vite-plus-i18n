/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv;
    // Define globEager
    globEager: (globPattern: string) => Record<string, { [key: string]: any }>;
  }
  

  declare interface NodeRequire {
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => any;
}
