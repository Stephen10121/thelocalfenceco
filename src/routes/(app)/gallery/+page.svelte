<script lang="ts">
  import { onMount } from "svelte";
  //@ts-ignore
  import Image from "svelte-image";

  const burStuff = {
    fence1: {
      encoded: "U6F#y}$y1T0wL-xa?uMy0:tS}pWE05S6W@R+",
      sizes: {
        width: 1200,
        height: 600,
      },
    },
    fence3: {
      encoded: "UGJ7aAZ%R+i{~T=}E0jYp_NHn$oJ64%MVsR%",
      sizes: { width: 591, height: 442 },
    },
    fence4: {
      encoded: "UIDT31_3NOkB~pW8Rmf9IVRh-oohI:xZ%KWC",
      sizes: { width: 1920, height: 1080 },
    },
    fence5: {
      encoded: "UEA,:kIUE0xv?]IBRQt8F?ot%1V[H@og%MRi",
      sizes: { width: 1024, height: 768 },
    },
  };
</script>

<section>
  <!-- <h1>Gallery</h1> -->
  <div class="row">
    <div class="column">
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence1.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
    </div>
    <div class="column">
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence1.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
    </div>
    <div class="column">
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence1.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
    </div>
    <div class="column">
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence1.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence3.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence4.jpg"
        alt="Cat"
        width="100%"
      />
      <Image
        blur={true}
        wrapperClass="columnimg"
        src="fence5.jpg"
        alt="Cat"
        width="100%"
      />
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
