<main>
  <section>
    <a href="/dashboard">Back</a>
  </section>
  <slot />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
  }
  section {
    width: 200px;
    height: 100%;
    background-color: green;
  }
</style>
