<script lang="ts">
    import { page } from '$app/stores';

    /**
     * Section index pages. On any page underneath one of these
     * (e.g. "/projects/foo" for "/projects") the link goes back to the section
     * instead of home.
     */
    export let sections: string[] = [];
    /** Link colour class: gweb-link-grey, gweb-link-black or gweb-link-white. */
    export let linkClass: string = "gweb-link-grey";

    $: path = $page.url.pathname;
    $: section = sections.find((s) => path.startsWith(s.replace(/\/$/, "") + "/"));
</script>

{#if section}
    <nav>
        <p class={linkClass}><a href={section}>&lt back</a></p>
    </nav>
{:else if path != "/"}
    <nav>
        <p class={linkClass}><a href="/">&lt home</a></p>
    </nav>
{/if}

<style lang="scss">
    p {
        font-size: 15px;
    }
</style>
