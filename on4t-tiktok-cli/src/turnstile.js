import axios from 'axios';

export const solveTurnstile = async () => {
  try {
    const { data } = await axios.post(
      'https://fathurweb.qzz.io/api/solver/turnstile-min',
      new URLSearchParams({
        url: 'https://on4t.com/tiktok-video-booster',
        siteKey: '0x4AAAAAAA_AzqcGkpvXo7np'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    if (!data.status || !data.result) {
      throw new Error('Gagal mendapatkan token Turnstile');
    }

    return data.result;
  } catch (err) {
    throw new Error(`Turnstile Error: ${err.message}`);
  }
};