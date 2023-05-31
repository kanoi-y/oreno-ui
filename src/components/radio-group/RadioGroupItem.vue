<script setup lang="ts">
import { Ref, computed, inject, onMounted, ref } from 'vue';

type Props = {
  value: string;
};

const props = defineProps<Props>();

const { selectedValue, updateSelectedValue } = inject('selectedValue') as {
  selectedValue: Ref<string>;
  updateSelectedValue: (value: string) => void;
};

const registerItem = inject('registerItem') as (value: {
  value: string;
  el: HTMLElement | null;
}) => void;

const radioRef = ref<HTMLElement | null>(null);

const isChecked = computed(() => selectedValue.value === props.value);

onMounted(() => {
  registerItem({ value: props.value, el: radioRef.value });
});
</script>
<template>
  <div
    role="radio"
    ref="radioRef"
    :aria-checked="isChecked"
    :tabindex="isChecked ? 0 : -1"
    :data-orenoui-state="isChecked ? 'checked' : 'unchecked'"
    @click="() => updateSelectedValue(props.value)"
  >
    <slot></slot>
  </div>
</template>
