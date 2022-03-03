import Input from '@/components/input/index.vue';
import {shallowMount} from '@vue/test-utils';

describe('PUBLIC', () => {
  it('TESTE 06', () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.contains('div', 'input', 'img')).toBe(true);
  });
});