<script setup>
import { computed } from "vue";
import usePopover from "./index";

const popover = usePopover();
const visible = computed(() => popover.getVisible());
const content = computed(() => popover.getContent());
</script>
<template>
  <div class="popover-provider">
    <div :class="{ 'popover--visible': visible }" class="popover">
      <div class="popover__mask" @click="content.onCancel('mask')"></div>
      <div class="popover__content">
        <div class="popover__header">{{ content.title }}</div>
        <div class="popover__body">{{ content.message }}</div>
        <div class="popover__footer">
          <button class="popover__btn cancel" @click="content.onCancel()">
            {{ content.cancelText }}
          </button>
          <button class="popover__btn confirm" @click="content.onConfirm()">
            {{ content.confirmText }}
          </button>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.popover-provider {
  position: relative;
}

.popover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1024;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in-out;
}
.popover--visible {
  visibility: visible;
  opacity: 1;
}
.popover--visible .popover__content {
  transform: scale(1);
}
.popover__mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.18);
}

.popover__content {
  position: absolute;
  transform: scale(0.8);
  z-index: 2;
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  background-color: #2c2c2c;
  border: 1px solid #525252;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all 0.15s ease-in-out;
}

.popover__header {
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
  text-align: start;
  border-bottom: 1px solid #525252;
}

.popover__body {
  padding: 16px;
  flex: 1;
  text-align: start;
}

.popover__footer {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 16px;
}
.popover__btn {
  padding: 8px 16px;
  border: 0;
  color: #fff;
  font-weight: 500;
  width: 100%;
}
.popover__btn.cancel {
  background-color: #ea584c;
}

.popover__btn.confirm {
  background-color: #36bb70;
}
</style>
