import Timer from '@/components/timer/index.vue';
import {shallowMount} from '@vue/test-utils';

describe('TIMER', () => {
  it('TESTE 05', () => {
    const wrapper = shallowMount(Timer);
    expect(wrapper.contains('div', 'div', 'h2', 'p')).toBe(true);
  });
});