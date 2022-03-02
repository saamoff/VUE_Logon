import TextContent from './TextContent.vue'

export default{
  title: 'TextContent',
  component: TextContent,
  argTypes: {
    operator: {
      control: {type: 'select'},
      options: ['tempClass', 'cityClass', 'pContentTitle', 'pContentLast', 'pContentFooter', 'pTimerClass', 'pLoginClass'],
    },
  },
};

const Example = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {TextContent},
  template: '<TextContent v-bind="$props" />',
});

export const Primary = Example.bind({});
Primary.args = {
  primary: true,
  text: 'Sample Text'
};

export const Temperature = Example.bind({});
Temperature.args = {
  operator: 'tempClass',
  text: 'Sample Text'
};

export const City = Example.bind({});
City.args = {
  operator: 'cityClass',
  text: 'Sample Text'
};

export const HomeSubtitle = Example.bind({});
HomeSubtitle.args = {
  operator: 'pContentTitle',
  text: 'Sample Text'
};

export const HomeContent = Example.bind({});
HomeContent.args = {
  operator: 'pContentLast',
  text: 'Sample Text'
}

export const FooterParagraph = Example.bind({});
FooterParagraph.args = {
  operator: 'pContentFooter',
  text: 'Sample Text'
}

export const FooterTimer = Example.bind({});
FooterTimer.args = {
  operator: 'pTimerClass',
  text: 'Sample Text'
}

export const LoginPageParagraph = Example.bind({});
LoginPageParagraph.args = {
  operator: 'pLoginClass',
  text: 'Sample Text'
}