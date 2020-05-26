<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Button dropdowns</h3>

    <h4 class="ui-block-heading">Variations</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-dd variant="default" text="Default" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="primary" text="Primary" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="secondary" text="Secondary" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="success" text="Success" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="info" text="Info" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="warning" text="Warning" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="danger" text="Danger" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="dark" text="Dark" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>

    <h4 class="ui-block-heading">Hidden arrow</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-dd variant="primary" text="Primary" class="dropdown-toggle-hide-arrow" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>

    <h4 class="ui-block-heading">Split</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-dd split variant="default" text="Default" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="primary" text="Primary" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="secondary" text="Secondary" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="success" text="Success" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="info" text="Info" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="warning" text="Warning" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="danger" text="Danger" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="dark" text="Dark" :right="isRtlMode">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-dd text="Extra large button" :right="isRtlMode" class="btn-group-xl">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
      <br>

      <b-dd text="Large button" :right="isRtlMode" size="lg">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
      <br>

      <b-dd text="Small button" :right="isRtlMode" size="sm">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
      <br>

      <b-dd text="Extra small button" :right="isRtlMode" class="btn-group-xs">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>
  </div>
</template>

<script>
export default {}
</script>
