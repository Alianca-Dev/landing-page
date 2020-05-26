<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-plyr</h3>
    <a target="_blank" href="https://github.com/redxtech/vue-plyr" class="ui-block-description">https://github.com/redxtech/vue-plyr</a>

    <div class="no-ie10" data-name="Plyr"></div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing" v-if="!isIE10Mode">
      <vue-plyr>
        <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
      </vue-plyr>

      <vue-plyr>
        <audio controls>
          <source :src="`${publicUrl}audio/Water_Lily.mp3`" type="audio/mp3">
        </audio>
      </vue-plyr>
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-plyr/vue-plyr.scss" lang="scss"></style>

<script>
import VuePlyr from 'vue-plyr'

export default {
  components: {
    VuePlyr
  }
}
</script>
