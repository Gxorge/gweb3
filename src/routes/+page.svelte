<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>gweb v3.8</title>
</svelte:head>

<HeroTitle title="gweb v3.8" subtitle="Web design for Hotten.UK"/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        <h1>H1</h1>
        <p class="gweb-link-grey">
            Example H1 <a href="https://github.com/gxorge">with a link to my GitHub.</a>
        </p>

        <h2>H2</h2>
        <ul>
            <li>Example H2.</li>
            <li>With a lovely</li>
            <li>unordered list.</li>
        </ul>
    </div>
</section>
