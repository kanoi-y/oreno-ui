<script setup lang="ts">
import { Ref, computed, inject } from 'vue';

type Props = {
  value: string;
};

const props = defineProps<Props>();

const { selectedTab } = inject('selectedTab') as {
  selectedTab: Ref<string | undefined>;
};
const isSelected = computed(() => selectedTab.value === props.value);
</script>
<template>
  <div
    role="tabpanel"
    tabindex="0"
    :data-orenoui-state="isSelected ? 'active' : 'inactive'"
    v-show="isSelected"
  >
    <slot></slot>
  </div>
</template>
