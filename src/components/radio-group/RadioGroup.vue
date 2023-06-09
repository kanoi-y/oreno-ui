<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from 'vue';

// FIXME: vue3.3にupgradeした際に型をジェネリクスに修正する。
type Props = {
  modelValue: string;
};

type Emits = {
  (e: 'update:modelValue', value: string): void;
};

type RadioItem = {
  value: string;
  el: HTMLElement | null;
};

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const selectedValue = ref(props.modelValue);
const radioItems = ref<RadioItem[]>([]);
const currentIndex = computed(() =>
  radioItems.value.findIndex((item) => item.value === selectedValue.value)
);

const registerItem = (value: RadioItem) => {
  radioItems.value.push(value);
};

const updateSelectedValue = (value: string) => {
  selectedValue.value = value;
  emits('update:modelValue', value);
};

const handleKeydown = (event: KeyboardEvent) => {
  const index = currentIndex.value;
  if (index === -1) return;
  if (
    event.key === 'Up' ||
    event.key === 'ArrowUp' ||
    event.key === 'Left' ||
    event.key === 'ArrowLeft'
  ) {
    if (index > 0) {
      updateSelectedValue(radioItems.value[index - 1].value);
      radioItems.value[index - 1].el?.focus();
      return;
    }
    updateSelectedValue(radioItems.value[radioItems.value.length - 1].value);
    radioItems.value[radioItems.value.length - 1].el?.focus();
  }

  if (
    event.key === 'Down' ||
    event.key === 'ArrowDown' ||
    event.key === 'Right' ||
    event.key === 'ArrowRight'
  ) {
    if (index < radioItems.value.length - 1) {
      updateSelectedValue(radioItems.value[index + 1].value);
      radioItems.value[index + 1].el?.focus();
      return;
    }
    updateSelectedValue(radioItems.value[0].value);
    radioItems.value[0].el?.focus();
  }
};

const setZeroToTabIndex = (index: number) => {
  if (index === -1 && radioItems.value.length > 0) {
    radioItems.value.forEach((item) => {
      if (!item.el) return;
      item.el.tabIndex = -1;
    });

    if (!radioItems.value[0].el) return;
    radioItems.value[0].el.tabIndex = 0;
  }
};

provide('selectedValue', { selectedValue, updateSelectedValue });
provide('registerItem', registerItem);

onMounted(() => {
  setZeroToTabIndex(currentIndex.value);
});

watch(currentIndex, (newValue) => {
  setZeroToTabIndex(newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  }
);
</script>

<template>
  <div role="radiogroup" @keydown.prevent="handleKeydown">
    <slot></slot>
  </div>
</template>
