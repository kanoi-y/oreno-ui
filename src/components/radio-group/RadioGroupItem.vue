<script setup lang="ts">
import { Ref, computed, inject, onMounted, ref } from 'vue';
//TODO: 矢印キーの押下でフォーカスも移動するように実装する

type Props = {
  value: string;
};

const props = defineProps<Props>();

const { selectedValue, updateSelectedValue } = inject('selectedValue') as {
  selectedValue: Ref<string>;
  updateSelectedValue: (value: string) => void;
};
const registerItem = inject('registerItem') as (value: string) => void;

const radioRef = ref(null);

const isChecked = computed(() => selectedValue.value === props.value);

onMounted(() => {
  registerItem(props.value);
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
