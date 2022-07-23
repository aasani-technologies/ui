<template>
  <Modal :on-close="onClose">
    <slot />
  </Modal>
</template>

<script lang="ts">
import Modal from "@/components/Modal.vue";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
    Modal,
  },
})
export default class Confirm extends Vue {
  @Prop() onClose;
}
</script>
