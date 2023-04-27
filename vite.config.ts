import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default (mode) => {
  // 配置打包主路径
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    base: env.VITE_PUBLIC_PATH,
    css: {
      // 引入预处理器
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/index.scss";',
        },
      },
    },
    define: {
      'process.env': {},
    },
  });
};
