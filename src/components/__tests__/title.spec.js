import Title from '@/components/title/index.vue';
import {shallowMount} from '@vue/test-utils';

describe('TITLE', () => {
  it('TESTE 02', () => {
    const wrapper = shallowMount(Title);
    expect(wrapper.contains('h1', 'h2', 'h3', 'h4', 'h5', 'h6')).toBe(true);
  });
});