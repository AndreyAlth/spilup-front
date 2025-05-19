import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr'
import tailwindcss from "@tailwindcss/vite";
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths(), svgr(),
  eslint(), tailwindcss(),
  ],
  resolve: {
    alias: {
      'i18n': path.resolve(__dirname, './src/i18n'),
      'styles': path.resolve(__dirname, './src/styles'),
      'components': path.resolve(__dirname, './src/components'),
      'utils': path.resolve(__dirname, './src/utils'),
      'configs': path.resolve(__dirname, './src/configs'),
      'constants': path.resolve(__dirname, './src/constants'),
      'app': path.resolve(__dirname, './src/app'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'middleware': path.resolve(__dirname, './src/middleware'),
      'assets': path.resolve(__dirname, './src/assets'),
      'api': path.resolve(__dirname, './src/api'),
    }
  },
  preview: {
    allowedHosts: [],
  }
})
