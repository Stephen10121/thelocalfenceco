<script lang="ts">
    interface IconDescription {
        iconLink: string;
        iconDesc: string;
        name: string;
    }

    export let iconDescription: IconDescription;
</script>

<section>
    <img src={iconDescription.iconLink} alt={iconDescription.iconDesc} />
    <h2>{iconDescription.name}</h2>
    <div>
        <slot />
    </div>
</section>

<style>
    section {
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    img {
        width: 40px;
        height: 40px;
        color: #28583b;
        margin-bottom: 10px;
    }

    h2 {
        font-family: "Poppins", sans-serif;
        font-size: 1.2rem;
    }
    
    div {
        margin-top: 20px;
    }
</style>