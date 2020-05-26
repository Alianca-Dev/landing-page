<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Avatars</h3>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-avatar></b-avatar>
      <b-avatar variant="primary" text="BV"></b-avatar>
      <b-avatar variant="info" :src="`${publicUrl}img/avatars/4.png`"></b-avatar>
      <b-avatar variant="default"><span class="ion ion-md-contacts text-big"></span></b-avatar>
    </div>

    <h4 class="ui-block-heading">Styling</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-avatar variant="default"></b-avatar>
      <b-avatar variant="secondary"></b-avatar>
      <b-avatar variant="primary"></b-avatar>
      <b-avatar variant="dark"></b-avatar>
      <b-avatar variant="light"></b-avatar>
      <b-avatar variant="success"></b-avatar>
      <b-avatar variant="danger"></b-avatar>
      <b-avatar variant="warning"></b-avatar>
      <b-avatar variant="info"></b-avatar>
    </div>

    <h4 class="ui-block-heading">Sizing</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-avatar></b-avatar>
      <b-avatar size="sm"></b-avatar>
      <b-avatar size="lg"></b-avatar>
      <b-avatar :size="24"></b-avatar>
      <b-avatar size="3em"></b-avatar>
      <b-avatar size="72px"></b-avatar>
    </div>

    <h4 class="ui-block-heading">Square</h4>

    <div class="cui-example">
      <b-avatar square></b-avatar>
    </div>

    <h4 class="ui-block-heading">Rounded</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-avatar rounded="sm"></b-avatar>
      <b-avatar rounded></b-avatar>
      <b-avatar rounded="lg"></b-avatar>
      <b-avatar rounded="top"></b-avatar>
      <b-avatar rounded="left"></b-avatar>
      <b-avatar rounded="right"></b-avatar>
      <b-avatar rounded="bottom"></b-avatar>
    </div>

    <h4 class="ui-block-heading">Button</h4>

    <div class="cui-example">
      <div>
        <b-avatar button variant="primary" text="FF" class="align-baseline"></b-avatar>
        Button Avatar
      </div>
    </div>

    <h4 class="ui-block-heading">Link</h4>

    <div class="cui-example">
      <div>
        <b-avatar href="javascript:void(0)" variant="info" :src="`${publicUrl}img/avatars/4.png`"></b-avatar>
        Link Avatar
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>
