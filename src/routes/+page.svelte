<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>gweb v3.10</title>
</svelte:head>

<HeroTitle title="gweb v3.10" subtitle="Web design for Hotten Technology Group"/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        <p class="gweb-link-grey">
            Main page text, without H1s anymore <a href="https://github.com/gxorge">with a link to my GitHub.</a>
        </p>

        <h2>H2</h2>
        <ul>
            <li>Example H2.</li>
            <li>With a lovely</li>
            <li>unordered list.</li>
        </ul>
    </div>
</section>
