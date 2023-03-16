<script lang="ts">
  //@ts-ignore
  import Image from "svelte-image";
</script>

<section>
  <!-- <h1>Gallery</h1> -->
  <div class="row">
    <div class="column">
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fence1.jpg"
          alt="fence1"
          width="100%"
        />
        <div class="cover">
          <h1>A Cool Fence</h1>
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fence3.jpg"
          alt="fence3"
          width="100%"
        />
        <div class="cover">
          <h1>Another Cool Fence</h1>
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fence4.jpg"
          alt="fence4"
          width="100%"
        />
        <div class="cover">
          <h1>Even Cooler Fence</h1>
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fence5.jpg"
          alt="fence5"
          width="100%"
        />
        <div class="cover">
          <h1>The Coolest Fence</h1>
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
    /* padding-top: 50px; */
  }
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 5px 5px 5px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  /* Create four equal columns that sits next to each other */
  .column {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }

  .image {
    margin-top: 8px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.466);
    /* background-color: rgba(0, 0, 0, 0.233); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    opacity: 0;
    transition: opacity 0.15s linear;
  }

  .cover:hover {
    opacity: 1;
  }

  .cover h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #000000;
  }

  .cover a {
    background-color: #28583b;
    font-family: "Roboto", sans-serif;
    color: white;
    text-decoration: none;
    padding: 7px;
    border-radius: 100vh;
    font-size: 0.85rem;
  }

  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
</style>
