<script setup lang="ts">
import { provide, ref } from 'vue';


// FIXME: vue3.3にupgradeした際に型をジェネリクスに修正する。
type Props = {
  modelValue: string;
}

type Emits = {
  (e: 'update:modelValue', value: string): void;
};

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const selectedValue = ref(props.modelValue);

const updateSelectedValue = (value: string) => {
  selectedValue.value = value;
  emits('update:modelValue', value);
};

provide('selectedValue', { selectedValue, updateSelectedValue });

</script>

<template>
  <div role="radiogroup">
    <slot></slot>
  </div>
</template>
