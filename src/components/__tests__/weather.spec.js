import Weather from '@/components/weather/index.vue';
import {shallowMount} from '@vue/test-utils';

describe('WEATHER', () => {
  it('TESTE 04', () => {
    const wrapper = shallowMount(Weather);
    expect(wrapper.find('div')).toBe(true);
  });
});