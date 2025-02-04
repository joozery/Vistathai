import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'es2017', // รองรับ Safari รุ่นเก่า
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*', // แก้ไข CORS ปัญหาโหลดไฟล์ภายนอก
    },
  },
  build: {
    target: ['es2017', 'safari11'], // รองรับ Safari เวอร์ชันเก่า
    minify: 'esbuild', // ใช้ esbuild เพื่อลดปัญหา Compatibility
  },
});