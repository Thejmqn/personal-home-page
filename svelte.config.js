import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: 'app.html' // All unmatched routes will fall back to index.html
    })
  }
};
