<footer>
    <section class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/gallery">Gallery</a>
    </section>
    <section class="info">
        <section class="address">
            <h1>Address</h1>
            <p>12453 Jeff st, Suite 100<br>Portland, Wa 59642<br>Email: <span><a href="mailto:mail@mail.com">mail@mail.com</a></span></p>
        </section>
        <section class="address">
            <h1>Contact</h1>
            <p>Phone: <span><a href="tel:1231231234">(123)-123-1234</a></span><br>Phone2: <span><a href="tel:1231231234">(123)-123-1234</a></span><br>Phone3: <span><a href="tel:1231231234">(123)-123-1234</a></span></p>
        </section>
    </section>
  </footer>

<style>
    footer {
      height: 200px;
      width: 100%;
      background-color: #3f3f3f;
      color: #ffffff;
      /* display: flex;
      align-items: flex-end;
      justify-content: flex-end; */
    }

    .links {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-bottom: 1px solid #ffffff;
        padding: 10px 0;
    }

    .links a {
        font-family: "Poppins", sans-serif;
        color: #ffffff;
        font-weight: bold;
        font-size: 1rem;
        text-decoration: none;
    }

    .info {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 20px;
    }

    .address h1 {
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        color: #f3f3f3;
        font-size: 0.75rem;
    }

    .address p, .address a {
        margin-left: 5px;
        margin-top: 10px;
        font-family: "Poppins", sans-serif;
        color: #f3f3f3;
        font-size: 0.75rem;
    }
</style>