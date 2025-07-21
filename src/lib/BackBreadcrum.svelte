<script lang="ts">
    import '../gweb.scss';
    import { page } from '$app/stores';
</script>

{#if $page.url.pathname != "/"}
    <nav>
        <p class="gweb-link-grey"><a href="/">&lt home</a></p>
    </nav>    
{/if}

<style lang="scss">
    p {
        font-size: 15px;
    }
</style>