<script setup lang="ts">
import { ref } from 'vue';
import Switch from './Switch.vue';

const enabled = ref(false);
</script>
<template>
  <Story title="Switch">
    <template #controls>
      <HstCheckbox v-model="enabled" title="enabled" />
    </template>
    <Variant>
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-orange-700' : 'bg-orange-500'"
        class="relative inline-flex h-9 w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-8 w-8 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
    </Variant>
  </Story>
</template>
