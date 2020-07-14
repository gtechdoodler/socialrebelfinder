import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import SearchBox from '@/components/common/SearchBox/SearchBox.vue';

const localVue = createLocalVue();
// Install BootstrapVue
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('components/common/SearchBox.vue', () => {
  // Inheritted Attributes
  it('inheritted attributes bind to the input, and not the outer element', () => {
    const wrapper = shallowMount(SearchBox, {
      attrs: {
        maxlength: 8
      },
      localVue
    });
    expect(wrapper.find('.input').attributes('maxlength')).to.equal('8');
  });
  // Spinner
  it('renders a progress spinner when showSpinner prop is boolean true', () => {
    const wrapper = shallowMount(SearchBox, {
      propsData: {
        showSpinner: true
      },
      localVue
    });
    expect(wrapper.find('.spinner-border')).to.exist;
  });
  // Valid
  it('renders a valid feedback message', () => {
    const validFeedback = 'Valid postcode format';
    const wrapper = shallowMount(SearchBox, {
      propsData: {
        validInput: true,
        feedback: validFeedback
      },
      localVue
    });
    expect(wrapper.find('.feedback').text()).to.equal(validFeedback);
  });
});
