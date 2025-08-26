import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html')
          },
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              'react': 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'ReactJSXRuntime'
            }
          }
        }
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
