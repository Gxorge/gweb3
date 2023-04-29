<script lang="ts">
    export let title: string;
    export let subtitle: string = "";
    export let colour: string = "";
    export let text_colour: string = "";
</script>

<section class="hero {colour == "" ? "is-primary" : ""}" style={colour == "" ? "" : "background-color: " + colour}>
    <div class="hero-body">
        <p class="title hero-text-padding" style={text_colour == "" ? "" : "color: " + text_colour}>
            <b>//</b><span class="hero-title-padding">{title}</span>
        </p>
        {#if subtitle != ""}
            <p class="subtitle hero-text-padding" style={text_colour == "" ? "" : "color: " + text_colour}>
                <b>/</b><span class="hero-subtitle-padding">{subtitle}</span>
            </p>
        {/if}
    </div>
</section>


<style lang="scss">
    // Makes the text break properly when the screen size is smol, credit to thomas
    p.title, p.subtitle {
        display: flex;
        align-items: flex-start;
      }

      p.title b, p.subtitle b {
        margin-right: 1rem;
        text-align: right;
      }

      p.title span, p.subtitle span {
        flex: 1;
      }
</style>