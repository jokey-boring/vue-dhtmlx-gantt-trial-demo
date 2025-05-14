import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    server: {
      // ← ← ← ← ← ←
      host: "0.0.0.0", // ← 新增内容 ←
    },
    // base: "/docx-vue/",
    build: {
        outDir: "gantt",
        minify: 'terser',
        terserOptions: {
            compress: {
                //生产环境时移除console.log(), console.info, console.warn, console.error, 或者直接赋值true移除一切console.*的代码
                drop_console: ['log'],
                drop_debugger: true,
            },
        },
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'MyComponentLibrary',
            fileName: (format) => `my-component-library.${format}.js`,
            formats: ['es'],
        },
        rollupOptions: {
            external: ['vue'],
            // input: './index.js',
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    // preserveModules: true,
                    dir: 'gantt',
                    // preserveModulesRoot: 'src',
                },
                // {
                //   format: 'cjs',
                //   entryFileNames: '[name].js',
                //   // preserveModules: true,
                //   dir: 'lib',
                //   // preserveModulesRoot: 'src',
                // },
            ],
        },
        
    },
    
})

