<script setup lang="ts">
import { Ref, computed, inject } from 'vue';

type Props = {
  value: string;
};

const props = defineProps<Props>();

const { selectedTab, updateSelectedTab } = inject('selectedTab') as {
  selectedTab: Ref<string | undefined>;
  updateSelectedTab: (index: string) => void;
};

const isSelected = computed(() => selectedTab.value === props.value);
</script>
<template>
  <button
    type="button"
    role="tab"
    :aria-selected="isSelected"
    :data-orenoui-state="isSelected ? 'active' : 'inactive'"
    :tabindex="isSelected ? 0 : -1"
    @click="() => updateSelectedTab(props.value)"
  >
    <slot></slot>
  </button>
</template>
