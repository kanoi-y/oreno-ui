<script setup lang="ts">
import { ref } from 'vue';
import RadioGroup from './RadioGroup.vue';
import RadioGroupItem from './RadioGroupItem.vue';

const cats = ref([
  {
    id: '1',
    name: 'Tama',
  },
  {
    id: '2',
    name: 'Mike',
  },
  {
    id: '3',
    name: 'Kuro',
  },
]);

const selectedCat = ref('1');
</script>
<template>
  <Story title="RadioGroup">
    <template #controls>
      <HstSelect
        v-model="selectedCat"
        :options="[...cats.map((cat) => cat.id), '4']"
        title="selectedValue"
      />
    </template>
    <Variant title="default">
      <RadioGroup v-model="selectedCat" class="flex flex-col gap-2">
        <RadioGroupItem
          v-for="cat in cats"
          :key="cat.id"
          :value="cat.id"
          class="flex gap-2 items-center"
        >
          <div
            class="w-6 h-6 rounded-full border-2 border-orange-400 flex justify-center items-center"
          >
            <div
              v-if="selectedCat === cat.id"
              class="w-2 h-2 rounded-full bg-orange-500"
            ></div>
          </div>
          <span class="text-md text-slate-300">{{ cat.name }}</span>
        </RadioGroupItem>
      </RadioGroup>
    </Variant>
  </Story>
</template>
