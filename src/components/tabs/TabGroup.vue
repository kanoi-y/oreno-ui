<script setup lang="ts">
import { provide, ref } from 'vue';

type Props = {
  defaultValue?: string;
}

const props = defineProps<Props>();

//TODO: defaultValueが存在しない場合、最初の要素が選択されるようにする。
const selectedTab = ref(props.defaultValue);
const updateSelectedTab = (value: string) => {
  selectedTab.value = value;
};

provide('selectedTab', { selectedTab, updateSelectedTab });

</script>
<template>
  <div>
   <slot />
  </div>
</template>
