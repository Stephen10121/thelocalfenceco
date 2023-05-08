<script lang="ts">
  //@ts-ignore
  import Image from "svelte-image";
</script>

<main>
  <!-- <h1 class="title">Gallery</h1> -->
  <div class="row">
    <div class="column">
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/wooden5.jpg"
          alt="Wooden Fence"
          width="100%"
        />
        <!-- <div class="cover">
          <div class="cover2">
            <h1>The Coolest Fence</h1>
            <a href="/contact">Get A Quote</a>
          </div>
        </div> -->
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/wooden3.jpg"
          alt="Wooden Fence"
          width="100%"
        />
        <!-- <div class="cover">
          <div class="cover2">
            <h1>Another Cool Fence</h1>
            <a href="/contact">Get A Quote</a>
          </div>
        </div> -->
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/wooden4.jpg"
          alt="Wooden Fence"
          width="100%"
        />
        <!-- <div class="cover">
          <div class="cover2">
            <h1>Even Cooler Fence</h1>
            <a href="/contact">Get A Quote</a>
          </div>
        </div> -->
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/whitepretty.jpg"
          alt="White Vinyl Fence"
        />
      <!-- <div class="cover">
        <div class="cover2">
          <h1>A Cool Fence</h1>
          <a href="/contact">Get A Quote</a>
        </div>
      </div> -->
    </div>
    </div>
    <div class="column">
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/wooden1.jpg"
          alt="Wooden Fence"
          width="100%"
        />
        <!-- <div class="cover">
          <div class="cover2">
            <h1>The Coolest Fence</h1>
            <a href="/contact">Get A Quote</a>
          </div>
        </div> -->
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/wooden2.jpg"
          alt="Wooden Fence"
          width="100%"
        />
        <!-- <div class="cover">
          <div class="cover2">
            <h1>The Coolest Fence</h1>
            <a href="/contact">Get A Quote</a>
          </div>
        </div> -->
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/wooden6.jpg"
          alt="Chicken fence with metal gate"
          width="100%"
        />
        <!-- <div class="cover">
          <div class="cover2">
            <h1>A Cool Fence</h1>
            <a href="/contact">Get A Quote</a>
          </div>
        </div> -->
      </div>
      <div class="image">
        <Image
          blur={true}
          wrapperClass="columnimg"
          src="fences/wooden7.jpg"
          alt="Chicken fence with metal gate"
          width="100%"
        />
        <!-- <div class="cover">
          <div class="cover2">
            <h1>A Cool Fence</h1>
            <a href="/contact">Get A Quote</a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding-top: 50px; */
  }

  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 20px 5px 5px 5px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  /* Create four equal columns that sits next to each other */
  .column {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    padding: 0 4px;
  }

  .image {
    margin-top: 8px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  /* .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } */

  /* .cover2 {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.466);
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    opacity: 0;
  } */

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* .cover:hover .cover2 {
    animation: show 0.15s linear forwards;
    display: flex;
  } */

  /* .cover h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #000000;
  } */

  /* .cover a {
    background-color: #28583b;
    font-family: "Roboto", sans-serif;
    color: white;
    text-decoration: none;
    padding: 7px;
    border-radius: 100vh;
    font-size: 0.85rem;
  } */

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

    .row {
      padding: 0 5px 5px 5px;
    }
  }
</style>
