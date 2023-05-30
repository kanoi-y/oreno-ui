<script setup lang="ts">
import { computed, provide, ref } from 'vue';

// FIXME: vue3.3にupgradeした際に型をジェネリクスに修正する。
type Props = {
  modelValue: string;
};

type Emits = {
  (e: 'update:modelValue', value: string): void;
};

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const selectedValue = ref(props.modelValue);
const items = ref<string[]>([]);
const currentIndex = computed(() => items.value.indexOf(selectedValue.value));

const registerItem = (value: string) => {
  items.value.push(value);
};

const updateSelectedValue = (value: string) => {
  selectedValue.value = value;
  emits('update:modelValue', value);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (currentIndex.value === -1) return;
  if (
    event.key === 'Up' ||
    event.key === 'ArrowUp' ||
    event.key === 'Left' ||
    event.key === 'ArrowLeft'
  ) {
    if (currentIndex.value > 0) {
      updateSelectedValue(items.value[currentIndex.value - 1]);
      return;
    }
    updateSelectedValue(items.value[items.value.length - 1]);
  }

  if (
    event.key === 'Down' ||
    event.key === 'ArrowDown' ||
    event.key === 'Right' ||
    event.key === 'ArrowRight'
  ) {
    if (currentIndex.value < items.value.length - 1) {
      updateSelectedValue(items.value[currentIndex.value + 1]);
      return;
    }
    updateSelectedValue(items.value[0]);
  }
};

provide('selectedValue', { selectedValue, updateSelectedValue });
provide('registerItem', registerItem);
</script>

<template>
  <div role="radiogroup" @keydown.prevent="handleKeydown">
    <slot></slot>
  </div>
</template>
