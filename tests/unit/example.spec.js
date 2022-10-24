import { shallowMount } from '@vue/test-utils'
import YartuButton from '@/components/YartuButton.vue'

describe('Button Text', () => {
  it('renders props.msg when passed', () => {
    const msg = 'deneme'
    const wrapper = shallowMount(YartuButton, {
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
