<script>
    import PictureV2 from "./PictureV2.svelte";

</script>
<div class='container'>
    <div class='pic' id='pic4'>
        <!-- <PictureV2 alt="Fence 4" url="fence5"/> -->
        <div id="pic4i"></div>
    </div>
    <div class='pic' id='pic3'>
        <div id="pic3i"></div>
    </div>
    <div class='pic' id='pic2'>
        <div id="pic2i"></div>
    </div>
    <div class='pic' id='pic1'>
        <div id="pic1i"></div>
    </div>
  </div>

<style>
   .container {
  position: relative;
  display: block;
  width: 100%;
  /* max-width: 400px;
  height: 280px; */
  min-height: 100%;
  margin: 0 auto;
}
.pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-animation: fade 20s infinite;
  animation: fade 20s infinite;
}

.pic div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#pic1 {
  animation-delay: 0s;
}
#pic2 {
  animation-delay: 5s;
}
#pic3 {
  animation-delay: 10s;
}
#pic4 {
  animation-delay: 15s;
}

#pic1i {
  background-image: url('/fences/whitepretty.jpg');
}
#pic2i {
  background-image: url('/fences/wooden5.jpg');
}
#pic3i {
  background-image: url('/fences/wooden4.jpg');
}
#pic4i {
  background-image: url('/fences/wooden3.jpg');
}
@-webkit-keyframes fade {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>