import type { Meta, StoryObj } from '@storybook/vue3';
import Switch from './Switch.vue';

type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  render: (args) => ({
    components: { Switch },
    setup() {
      return { args };
    },
    template: `
    <Switch v-bind='args' :class="args.modelValue ? 'bg-orange-700' : 'bg-orange-500'" class="relative inline-flex h-9 w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      <span
        aria-hidden="true"
        :class="args.modelValue ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-8 w-8 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>`,
  }),
  argTypes: {
    'onUpdate:modelValue': { action: "update:modelValue" },
  },
};

export const Default: Story = {
  args: {
    modelValue: false,
  },
};

export const valueTrueStory: Story = {
  args: {
    modelValue: true,
  },
};

export default meta;
