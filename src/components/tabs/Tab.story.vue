<script setup lang="ts">
import Tab from './Tab.vue';
import TabContent from './TabContent.vue';
import TabGroup from './TabGroup.vue';
import TabList from './TabList.vue';

</script>
<template>
  <Story title="Tab">
    <Variant title="default">
      <TabGroup defaultValue="contentA">
        <TabList>
          <Tab value="contentA">タブA</Tab>
          <Tab value="contentB">タブB</Tab>
          <Tab value="contentC">タブC</Tab>
        </TabList>
        <TabContent value="contentA">コンテンツA</TabContent>
        <TabContent value="contentB">コンテンツB</TabContent>
        <TabContent value="contentC">コンテンツC</TabContent>
      </TabGroup>
    </Variant>
  </Story>
</template>
