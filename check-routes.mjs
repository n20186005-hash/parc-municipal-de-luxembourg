const base = 'http://localhost:39014';

for (const p of ['/sitemap.xml', '/robots.txt']) {
  try {
    const res = await fetch(base + p, { redirect: 'manual' });
    const text = await res.text();
    console.log('===', p, res.status);
    console.log(text.slice(0, 1600));
  } catch (e) {
    console.log(p, 'ERR', e.message);
  }
}
