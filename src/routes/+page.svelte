<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Bubbletill</title>
</svelte:head>

<HeroTitle title="Bubbletill" subtitle="An all-in-one retail solution"/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        <h1>What is Bubbletill?</h1>
        <p>
            Bubbletill is an open source suite of POS applications, created in .NET. Bubbletill aims to provide all the software and tools that you'll need to process sales in small to medium businesses.
        </p>

        <h2>Getting Started</h2>
        <p class="gweb-link-black">
            Bubbletill is still a work-in-progress application, with documentation still in the writing. You can find the source code <a href="https://github.com/bubbletill">on GitHub</a>.
        </p>

        <img src="/sale.png" alt="Bubbletill POS sale screen.">
    </div>
</section>
