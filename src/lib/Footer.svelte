<script lang="ts">
    /** Bold first line of the footer, e.g. "© 2026 George Hotten". */
    export let copyright: string;
</script>

<!--
    Put the footer links in the default slot, separated with &middot;
    <Footer copyright="© 2026 George Hotten">
        <a href="https://github.com/gxorge/">github</a> &middot;
        <a href="/legal">legal</a>
    </Footer>
-->
<footer class="gweb-footer footer-sticky">
    <div class="content footer-text has-text-centered">
        <div class="gweb-text-layout">
            <p style="font-size: 15px;"><b>{copyright}</b></p>
            <p style="font-size: 15px;" class="gweb-link-white">
                <slot />
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
