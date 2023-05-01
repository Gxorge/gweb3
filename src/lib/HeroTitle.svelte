<script lang="ts">
    import '$lib/HeroTitle.scss';

    export let title: string;
    export let subtitle: string = "";
    export let colour: string = "";
    export let text_colour: string = "";
</script>

<header class="hero {colour == "" ? "is-primary" : ""}" style={colour == "" ? "" : "background-color: " + colour}>
    <div class="hero-body hero-text-padding">
        <h1 class="title" style={text_colour == "" ? "" : "color: " + text_colour}>
            {title}
        </h1>
        {#if subtitle != ""}
            <h2 role="doc-subtitle" class="subtitle" style={text_colour == "" ? "" : "color: " + text_colour}>
                {subtitle}
            </h2>
        {/if}
    </div>
</header>