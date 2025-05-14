<script setup lang="ts">
</script>

<template>
    <div class="d-flex gap-2">
        <span class="text-nowrap fw-bold">{{ $t("Coffee") }}</span>
        <Span class="fs-3 lh-1">&#129050;</Span>
        <form v-if="$i18n.locale === 'da'" action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="EWBC67WQU8XHA" />
            <input type="image"
                src="https://pics.paypal.com/00/s/NmMzODY4YTgtNzdiYS00NGMzLTllYmMtODFmOTBjMGNhODIx/file.PNG" border="0"
                name="submit" title="PayPal - The safer, easier way to pay online!"
                alt="Doner penge med PayPal-knappen" />
            <img alt="" border="0" src="https://www.paypal.com/da_DK/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <form v-else action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="V8BVEH82UUZT6" />
            <input type="image"
                src="https://pics.paypal.com/00/s/NWQ5YjQ5ODUtYzM0MS00NWJhLTlhNGEtNmNlNGQwYTg1ZjU5/file.PNG" border="0"
                name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_DK/i/scr/pixel.gif" width="1" height="1" />
        </form>
    </div>
</template>

<style scoped>
form,
form>input[type="image"] {
    height: 1.5rem;
    width: auto;
}
</style>
