<template>
  <div modal="true">
    <div>
      <div v-if="visible" :data-modal="name" class="modal">
        <div
          arial-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal_mask"
        >
          <div class="modal_body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VModal from "./handle";
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
    };
  },
  beforeMount() {
    // open event
    VModal.EventBus.$on("open", (params) => {
      if (this.name === params.name) {
        this.open(params);
      }
    });
    // close event
    VModal.EventBus.$on("close", (params) => {
      if (this.name === params.name) {
        this.close(params);
      }
    });
  },
  methods: {
    close(params) {
      this.visible = false;
    },
    open(params) {
      this.visible = true;
      // TO DO SOMETHING
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 9999999999 !important;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
