import axios from 'axios';
import * as cheerio from 'cheerio';
import { formatCookie, generateFingerprint } from './utils.js';
import { solveTurnstile } from './turnstile.js';

export const FreeViewLike = async (videoUrl) => {
  try {
    // Ambil halaman awal
    const page = await axios.get(
      'https://on4t.com/tiktok-video-booster',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0'
        }
      }
    );

    const $ = cheerio.load(page.data);
    const csrfToken = $('meta[name="csrf-token"]').attr('content');
    const cookies = formatCookie(page.headers['set-cookie']);

    if (!csrfToken) {
      throw new Error('CSRF Token tidak ditemukan');
    }

    const headers = {
      'accept': '*/*',
      'content-type': 'application/json',
      'x-csrf-token': csrfToken,
      'cookie': cookies,
      'referer': 'https://on4t.com/tiktok-video-booster',
      'user-agent': 'Mozilla/5.0'
    };

    // Solve Cloudflare Turnstile
    const turnstileToken = await solveTurnstile();

    // Parse video TikTok
    const parse = await axios.post(
      'https://on4t.com/free-tiktok-views/video',
      {
        url: videoUrl,
        'cf-turnstile-response': turnstileToken
      },
      { headers }
    );

    if (parse.data?.error) {
      throw new Error(parse.data.error);
    }

    // Kirim request boost
    const boost = await axios.post(
      'https://on4t.com/free-tiktok-views/views',
      {
        link: videoUrl,
        fingerprint_id: generateFingerprint(),
        tool_type: 'on4t-video-booster'
      },
      { headers }
    );

    return {
      success: true,
      video: {
        title: parse.data.title,
        author: parse.data.author,
        unique_id: parse.data.unique_id
      },
      result: boost.data
    };

  } catch (err) {
    return {
      success: false,
      message: err.message
    };
  }
};