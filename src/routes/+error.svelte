<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
    import { page }  from '$app/stores';
</script>    

<HeroTitle title="Oh snap" subtitle="Erorr code {$page.status}"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h1>This is awkward</h1>
        <p class="gweb-link-black">
            There was an error loading this page with the status code {$page.status}. If you believe this is a mistake, please get in touch with the contact details on my <a href="https://github.com/gxorge"  target="_blank" rel="noopener">GitHub</a>.
        </p>
    </div>
</section>