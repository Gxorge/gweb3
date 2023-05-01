<script lang="ts">
    import '../app.scss';
</script>

<div class="gweb-banner"/>

<main class="gweb-container">
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