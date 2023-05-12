<script setup>
import usePopover from "./plugins/popover";
import PopoverProvider from "./plugins/popover/PopoverProvider.vue";

const popover = usePopover();

const handleOpen = () => {
  popover.open({
    title: "Popover Title",
    message: "message",
    cancelText: "Cancel",
    confirmText: "Confirm",
    maskClosable:true,
    onCancel() {
      console.log('Cancel function');
    },
    onConfirm() {
      console.log('Confirm function');
    },
  });
};
</script>

<template>
  <PopoverProvider>
    <button @click="handleOpen">Open Popover</button>
  </PopoverProvider>
</template>
