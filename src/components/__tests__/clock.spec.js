import Clock from '@/components/clock/index.vue';
import {shallowMount} from '@vue/test-utils';

describe('CLOCK', () => {
  it('TESTE 03', () => {
    const wrapper = shallowMount(Clock);
    expect(wrapper.contains('div', 'div', 'h1', 'h1', 'h1', 'p')).toBe(true);
  });
});