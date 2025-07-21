<script lang="ts">
    import '../gweb.scss';
</script>

<main class="gweb-container">
    <slot />
</main>

<footer class="gweb-footer footer-sticky">
    <div class="content footer-text has-text-centered">
        <div class="gweb-text-layout">
            <p style="font-size: 15px;"><b>© 2025 Hotten Technology Group</b></p>
            <p style="font-size: 15px;" class="gweb-link-white">
                <a href="https://github.com/gxorge/gweb3">source</a> &middot;
                <a href="https://github.com/gxorge/">github</a> &middot;
                <a href="https://hotten.uk">hotten.uk</a> &middot;
                <a href="/legal">legal</a>
            </p>
        </div>
        <div class="footer-colours">
            <div class="footer-colour" id="aston"></div>
            <div class="footer-colour" id="solihull"></div>
            <div class="footer-colour" id="george"></div>
            <div class="footer-colour" id="hotten"></div>
        </div>
    </div>
</footer>