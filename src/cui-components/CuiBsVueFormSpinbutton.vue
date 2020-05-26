<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap-Vue Form Spinbutton</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-form-spinbutton v-model="value" min="1" max="100" />

      <pre>Value: {{ value }}</pre>

      <!-- Sizes -->

      <b-form-spinbutton v-model="value" min="1" max="100" size="sm" />

      <b-form-spinbutton v-model="value" min="1" max="100" size="lg" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 30
  })
}
</script>
