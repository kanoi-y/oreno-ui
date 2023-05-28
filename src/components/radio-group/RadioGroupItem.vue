<script setup lang="ts">
import { Ref, computed, inject } from 'vue';

type Props = {
  value: string;
};

const props = defineProps<Props>();

const { selectedValue, updateSelectedValue } = inject('selectedValue') as {
  selectedValue: Ref<string>;
  updateSelectedValue: (value: string) => void;
};
const isChecked = computed(() => selectedValue.value === props.value);
</script>
<template>
  <div
    role="radio"
    :aria-checked="isChecked"
    :tabindex="isChecked ? 0 : -1"
    :data-orenoui-state="isChecked ? 'checked' : 'unchecked'"
    @click="() => updateSelectedValue(props.value)"
  >
    <slot></slot>
  </div>
</template>
