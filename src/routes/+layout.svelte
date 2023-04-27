<script lang="ts">
    import '../app.scss';
    import { page } from '$app/stores';

    let mobileMenuActive = false;
</script>

<nav class="navbar is-dark gweb-link-white" aria-label="main navigation">
    {#if $page.url.pathname != "/"}
        <p style="font-size: 10px;"><a href="/">&lt home</a></p>
    {/if}
</nav>

<main class="gweb-content">
    <slot />
</main>

<footer class="gweb-footer footer-sticky">
    <div class="content gweb-text-layout footer-text has-text-centered">
        <p style="font-size: 15px;"><b>© George Hotten 2023</b></p>
        <p style="font-size: 15px;" class="gweb-link-white">
            <a href="https://github.com/gxorge/gweb3" target="_blank" rel="noopener">source</a> &middot; 
            <a href="https://wiki.hotten.cloud" target="_blank" rel="noopener">homelab</a> &middot; 
            <a href="https://github.com/gxorge/" target="_blank" rel="noopener">github</a> &middot; 
            <a href="https://hotten.uk" target="_blank" rel="noopener">hotten.uk</a>
        </p>
    </div>
</footer>

<style lang="scss">
    .navbar-brand {
        color: white;
    }

    .navbar {
        min-height: unset;
        height: 15px;
    }
</style>