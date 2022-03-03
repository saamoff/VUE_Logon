import Weather from '@/components/weather/index.vue';
import {shallowMount} from '@vue/test-utils';

describe('PUBLIC', () => {
  it('TESTE 04', () => {
    const wrapper = shallowMount(Weather);
    expect(wrapper.contains('div', 'div')).toBe(true);
  });
});