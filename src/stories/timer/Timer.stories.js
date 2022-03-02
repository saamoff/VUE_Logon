import Timer from './Timer.vue'

export default{
  title: 'Timer',
  component: Timer,
};

const Example = (args, {argTypes}) =>({
  props: Object.keys(argTypes),
  components: {Timer},
  template: '<Timer v-bind="$props" />'
});

export const Primary = Example.bind({});
Primary.args = {
  primary: true,
  seconds: 600
};