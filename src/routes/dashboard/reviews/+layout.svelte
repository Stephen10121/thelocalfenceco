<main>
  <section>
    <a href="/dashboard">Back</a>
  </section>
  <slot />
</main>

<style>
  main {
    display: flex;
  }
  section {
    width: 200px;
    height: calc(100vh - 70px);
    background-color: green;
  }
</style>
