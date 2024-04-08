<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>gweb v3.7</title>
</svelte:head>

<HeroTitle title="gweb v3.7" subtitle="Web design for Hotten.UK"/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        <h1>H1</h1>
        <p>
            Example H1.
        </p>

        <h2>H2</h2>
        <p>
            Example H2.
        </p>
    </div>
</section>
