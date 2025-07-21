<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Legal | Hotten Technology Group</title>
</svelte:head>

<HeroTitle title="Legal Information"/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        <br>
        <p>
            This website is operated by Hotten Technology Group Limited ("Hotten Technology"), a company registered in England & Wales under number 16596937 whose registered office is Unit 29 Highcroft Industrial Estate Enterprise Road, Horndean, Waterlooville, United Kingdom, PO8 0BT. Hotten UK and Hotten Cloud are trading names of Hotten Technology.
        </p>

        <h2>Privacy</h2>
        <p>No personal data is collected on this website.</p>

        <h2>Cookies</h2>
        <p class="gweb-link-black">
            Cookies are small files saved on your phone, tablet or computer when you visit a website.
            <br><br>
            Hotten Technology does not set any cookies on this website. Our content delivery and security service, Cloudflare, may set strictly necassary cookies and these cannot be turned off.
            <br><br>
            For more information regarding cookies set by Cloudflare, please visit <a href="https://www.cloudflare.com/en-gb/cookie-policy/">their cookie policy.</a>
        </p>

        <h2>Contact</h2>
        <p class="gweb-link-black">
            For any enquiries regarding Hotten Technology, please <a href="mailto:legal@hottentechnology.com">contact us here.</a>
        </p>
    </div>
</section>
