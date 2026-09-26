<script lang="ts">
    // The demo site uses the default theme. A site using the package imports
    // its own theme file instead (see README).
    import '$lib/styles/gweb.scss';
    import Footer from '$lib/Footer.svelte';
</script>

<main class="gweb-container">
    <slot />
</main>

<Footer copyright="© 2025 Hotten Technology Group">
    <a href="https://github.com/gxorge/gweb3">source</a> &middot;
    <a href="https://github.com/gxorge/">github</a> &middot;
    <a href="https://hotten.uk">hotten.uk</a> &middot;
    <a href="/legal">legal</a>
</Footer>
