<section class="cover">
    <h1>Welcome</h1>
    <a href="#section08"><span></span><span></span><span></span></a>
</section>

<style>
    .cover {
        position: relative;
        background: linear-gradient(#ffffff00, #000000);
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: clamp(2.5rem, -1.5rem + 8vw, 4rem);
        color: #dbdbdb;
        margin-bottom: 50px;
    }

    a {
        position: absolute;
        bottom: 70px;
        left: 50%;
        padding-top: 80px;
        z-index: 2;
        display: inline-block;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50% 0);
        color: #fff;
        font : normal 400 20px/1 'Roboto', sans-serif;
        letter-spacing: .1em;
        text-decoration: none;
        transition: opacity .3s;
    }

    a:hover {
        opacity: .5;
    }


    a span {
        position: absolute;
        top: 0;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: sdb07 2s infinite;
        animation: sdb07 2s infinite;
        opacity: 0;
        box-sizing: border-box;
    }

    a span:nth-of-type(1) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }

    a span:nth-of-type(2) {
        top: 16px;
        -webkit-animation-delay: .15s;
        animation-delay: .15s;
    }

    a span:nth-of-type(3) {
        top: 32px;
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
    }

    @-webkit-keyframes sdb07 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes sdb07 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>