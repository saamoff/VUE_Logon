import Title from './Title.vue'

export default{
  title: 'Title',
  component: Title,
  argTypes: {
    operator: {
      control: {type: 'select'},
      options: ['clockClass', 'contentHomeTitle', 'contentHome', 'loginTitle', 'detailsLogin', 'timerClass']
    },
    control: {
      control: {type: 'select'},
      options: ['1', '2', '3', '4', '5', '6']
    },
    textColor: {
      control: 'color'
    },
  },
};

const Example = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {Title},
  template: '<Title v-bind="$props" />',
})

export const Primary = Example.bind({});
Primary.args = {
  primary: true,
  text: 'Sample Title'
}

export const Clock = Example.bind({});
Clock.args = {
  operator: 'clockClass',
  control: '1',
  text: 'Sample Title'
}

export const ContentHomeTitle = Example.bind({});
ContentHomeTitle.args = {
  operator: 'contentHomeTitle',
  control: '1',
  text: 'Sample Title'
}

export const LoginTitle = Example.bind({});
LoginTitle.args = {
  operator: 'loginTitle',
  control: '1',
  text: 'Sample Title'
}

export const LoginDetailsTitle = Example.bind({});
LoginDetailsTitle.args = {
  operator: 'detailsLogin',
  control: '1',
  text: 'Sample Title'
}

export const TimerText = Example.bind({});
TimerText.args = {
  operator: 'timerClass',
  control: '1',
  text: 'Sample Title'
}