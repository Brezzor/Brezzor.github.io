<script setup lang="ts">
</script>

<template>
    <div class="text-center">
        <p>{{ $t('DonateText') }}</p>
        <form v-if="$i18n.locale === 'da'" action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="EWBC67WQU8XHA" />
            <input type="image" src="https://www.paypalobjects.com/da_DK/DK/i/btn/btn_donateCC_LG.gif" border="0"
                name="submit" title="PayPal - The safer, easier way to pay online!"
                alt="Doner penge med PayPal-knappen" />
            <img alt="" border="0" src="https://www.paypal.com/da_DK/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <form v-else action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="V8BVEH82UUZT6" />
            <input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0"
                name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_DK/i/scr/pixel.gif" width="1" height="1" />
        </form>
    </div>
</template>
