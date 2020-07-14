<template>
  <b-modal id="messageModal" class="message-modal" hide-footer>
    <div class="d-block text-center">{{ message }}</div>
    <div class="message-modal__footer">
      <b-button class="message-modal__ok" block @click="onOKClick">OK</b-button>
    </div>
  </b-modal>  
</template>

<script>
export default {
  name: 'MessageModal',
  data: () => ({
    message: ''
  }),
  methods: {

    show(message) {
      this.message = message;
      this.$refs.messageModal.show();
    },

    onOKClick() {
      this.$refs.messageModal.hide();
      this.message = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.message-modal {
  /* TODO: Overriding BS styles, but actually should create a custom button component
      Same styles are overridden in AddressConfirmation.vue too */
  .message-modal__ok {
    background-color: $color-btn-primary;
    border-color: $color-btn-primary;
    color: $color-font-header;
    &:hover {
      background-color: $color-btn-primary--hover;
    }
  }
}
</style>