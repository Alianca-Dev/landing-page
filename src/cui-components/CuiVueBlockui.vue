<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-blockui</h3>
    <a target="_blank" href="https://github.com/realdah/vue-blockui" class="ui-block-description">https://github.com/realdah/vue-blockui</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <BlockUI message="" :html="html" v-if="loading" />
      <b-btn variant="primary" size="lg" @click="blockPage">Block page</b-btn>
    </div>
  </div>
</template>

<style>
  .loading-container .loading-backdrop {
    background: #fff !important;
    opacity: .7 !important;
  }
  .dark-style .loading-container .loading-backdrop {
    background: #22252B !important;
    opacity: .8 !important;
  }
  .loading-container .loading {
    background: none !important;
    box-shadow: none !important;
  }
</style>

<style src="@/vendor/libs/spinkit/spinkit.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import BlockUI from 'vue-blockui'

Vue.use(BlockUI)

export default {
  data: () => ({
    loading: false,
    html: `
<div class="sk-fold sk-primary mx-auto mb-4"><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div></div>
<h5 class="text-center mb-0">LOADING...</h5>`
  }),
  methods: {
    blockPage () {
      this.loading = true
      setTimeout(() => { this.loading = false }, 4000)
    }
  }
}
</script>
