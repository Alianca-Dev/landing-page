<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap-Vue Pickers</h3>

    <div class="border p-4 mt-4">
      <b-form-radio-group v-model="state">
        <b-form-radio class="mb-0" value="normal">Normal</b-form-radio>
        <b-form-radio class="mb-0" value="disabled">Disabled</b-form-radio>
        <b-form-radio class="mb-0" value="readonly">Readonly</b-form-radio>
      </b-form-radio-group>
    </div>

    <h4 class="ui-block-heading">Calendar</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-calendar v-model="date" :disabled="state === 'disabled'" :readonly="state === 'readonly'" />
    </div>

    <h4 class="ui-block-heading">Form Datepicker</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-form-datepicker id="example-bsvue-datepicker-1" v-model="date" :disabled="state === 'disabled'" :readonly="state === 'readonly'" />
      <b-form-datepicker id="example-bsvue-datepicker-2" size="sm" v-model="date" :disabled="state === 'disabled'" :readonly="state === 'readonly'" />
      <b-form-datepicker id="example-bsvue-datepicker-3" size="lg" v-model="date" :disabled="state === 'disabled'" :readonly="state === 'readonly'" />
    </div>

    <h4 class="ui-block-heading">Form Timepicker</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-form-timepicker id="example-bsvue-timepicker-1" v-model="time" :disabled="state === 'disabled'" :readonly="state === 'readonly'" />
      <b-form-timepicker id="example-bsvue-timepicker-2" size="sm" v-model="time" :disabled="state === 'disabled'" :readonly="state === 'readonly'" />
      <b-form-timepicker id="example-bsvue-timepicker-3" size="lg" v-model="time" :disabled="state === 'disabled'" :readonly="state === 'readonly'" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    state: 'normal',
    date: '',
    time: ''
  })
}
</script>
