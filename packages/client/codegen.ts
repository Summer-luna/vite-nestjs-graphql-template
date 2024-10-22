import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_BACKEND_URL,
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/graphql/graphql.ts": {
      preset: "client",
      plugins: [],
    },
    "src/graphql/": {},
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
