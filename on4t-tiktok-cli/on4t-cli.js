#!/usr/bin/env node
import { FreeViewLike } from './src/core.js';

const url = process.argv[2];

if (!url) {
  console.log('❌ Gunakan: on4t <url_tiktok>');
  process.exit(1);
}

console.log('🚀 Memproses video TikTok...');
const result = await FreeViewLike(url);
console.log(JSON.stringify(result, null, 2));