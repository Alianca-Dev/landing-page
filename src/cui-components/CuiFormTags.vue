<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Form tags</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-form-tags
        v-model="tags"
        separator=" ,;"
        placeholder="Enter new tags separated by space, comma or semicolon"
        remove-on-delete
        :disabled="disabled"
      ></b-form-tags>

      <b-form-tags
        v-model="tags"
        tag-variant="primary"
        tag-pills
        separator=" ,;"
        placeholder="Enter new tags separated by space, comma or semicolon"
        remove-on-delete
        :disabled="disabled"
      ></b-form-tags>

      <b-btn :variant="disabled ? 'danger' : 'secondary'" @click="disabled = !disabled">{{ disabled ? 'Enable' : 'Disable' }}</b-btn>
    </div>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-form-tags size="sm" v-model="tags" separator=" ,;" remove-on-delete :disabled="disabled" />
      <b-form-tags size="lg" v-model="tags" separator=" ,;" remove-on-delete :disabled="disabled" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    disabled: false,
    tags: ['Apple', 'Orange']
  })
}
</script>
