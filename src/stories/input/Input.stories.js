import Input from './Input.vue'

export default{
  title: 'Input',
  component: Input,
  argTypes: {
    typeInput: {
      control: {type: 'select'},
      options: ['text', 'password', 'submit'],
    },
    placeHolder: {
      control: {type: 'select'},
      options: ['Usuario', 'Senha'],
    },
    class: {
      control: {type: 'select'},
      options: ['inputTextClass', 'inputSubmitClass'],
    },
    iconID: {
      control: {type: 'select'},
      options: ['usericon', 'lockpad', false],
    },
  },
};

const Example = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {Input},
  template: '<Input v-bind="$props" />',
});

export const Primary = Example.bind({});
Primary.args = {
  primary: true,
};

export const User = Example.bind({});
User.args = {
  icon: 'usericon',
  placeHolder: 'Usuario',
  type: 'text',
};

export const Password = Example.bind({});
Password.args = {
  icon: 'lockpad',
  placeHolder: 'Senha',
  type: 'password',
};

export const Submit = Example.bind({});
Submit.args = {
  icon: false,
  type: 'submit',
  text: 'Continuar'
}