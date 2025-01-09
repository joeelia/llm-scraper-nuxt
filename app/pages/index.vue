<template>
  <div class="centered">
    <a href="/api/top-5-hn">Top 5 stories on Hacker News as JSON</a>
    <p>Source code on GitHub: <a href="https://github.com/atinux/llm-scraper-nuxt">atinux/llm-scraper-nuxt</a></p>
  </div>
</template>

<style scoped>
.centered {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a {
  color: blue;
  text-decoration: underline;
  font-size: 18px;
}
</style>
