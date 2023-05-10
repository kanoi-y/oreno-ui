<script setup lang="ts">
type Props = {
  modelValue: boolean;
  disabled?: boolean;
};
const props = defineProps<Props>();

type Emits = {
  (e: 'update:modelValue', value: boolean): void;
};
const emits = defineEmits<Emits>();
</script>
<template>
  <button
    type="button"
    role="switch"
    :disabled="disabled"
    :aria-checked="props.modelValue"
    :data-orenoui-state="props.modelValue ? 'on' : 'off'"
    @click="() => emits('update:modelValue', !props.modelValue)"
  >
    <slot />
  </button>
</template>
