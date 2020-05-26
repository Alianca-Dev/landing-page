<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Overlay</h3>

    <div class="cui-example mt-5">
      <b-row>
        <b-col lg="6" aria-controls="overlay-background">
          <b-form-group label="Variant" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
            <b-form-select id="bg-variant" v-model="overlayVariant" :options="overlayVariants"></b-form-select>
          </b-form-group>
          <b-form-group label="Opacity" label-for="bg-opacity" label-cols-sm="4" label-cols-lg="12">
            <div class="d-flex">
              <b-form-input
                id="bg-opacity"
                v-model="overlayOpacity"
                type="range"
                number
                min="0"
                max="1"
                step="0.01"
              ></b-form-input>
              <div class="text-monospace ml-3">
                {{ overlayOpacity.toFixed(2) }}
              </div>
            </div>
          </b-form-group>
          <b-form-group label="Blur" label-for="bg-blur" label-cols-sm="4" label-cols-lg="12">
            <b-form-select id="bg-blur" v-model="overlayBlur" :options="overlayBlurs"></b-form-select>
          </b-form-group>
          <b-form-group label="Spinner type" label-for="spinner-type" label-cols-sm="4" label-cols-lg="12">
            <b-form-select id="spinner-type" v-model="spinnerType" :options="spinnerTypes"></b-form-select>
          </b-form-group>
          <b-form-group label="Spinner variant" label-for="spinner-variant" label-cols-sm="4" label-cols-lg="12">
            <b-form-select id="spinner-variant" v-model="spinnerVariant" :options="spinnerVariants"></b-form-select>
          </b-form-group>
          <b-form-group label="Spinner size" label-for="spinner-size" label-cols-sm="4" label-cols-lg="12">
            <b-form-select id="spinner-size" v-model="spinnerSize" :options="spinnerSizes"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-overlay
            id="overlay-background"
            :show="showOverlay"
            :variant="overlayVariant"
            :opacity="overlayOpacity"
            :blur="overlayBlur"
            :spinner-variant="spinnerVariant"
            :spinner-type="spinnerType"
            :spinner-small="spinnerSize === 'small'"
            rounded="sm"
          >
            <b-card title="Card with overlay" aria-hidden="true">
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </b-card-text>
              <b-button :disabled="showOverlay" variant="primary" @click="showOverlay = true">
                Show overlay
              </b-button>
            </b-card>
          </b-overlay>

          <b-button class="mt-3" @click="showOverlay = !showOverlay">Toggle overlay</b-button>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    showOverlay: true,
    overlayVariant: 'white',
    overlayOpacity: 0.85,
    overlayBlur: '2px',
    spinnerType: 'grow',
    spinnerVariant: 'primary',
    spinnerSize: 'default',
    overlayVariants: [
      'transparent',
      'white',
      'light',
      'dark',
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info'
    ],
    overlayBlurs: [
      { text: 'None', value: '' },
      '1px',
      '2px',
      '5px',
      '0.5em',
      '1rem'
    ],
    spinnerTypes: [
      'border',
      'grow'
    ],
    spinnerVariants: [
      'white',
      'light',
      'dark',
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info'
    ],
    spinnerSizes: [
      'default',
      'small'
    ]
  })
}
</script>
