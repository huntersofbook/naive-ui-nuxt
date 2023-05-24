import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '~/vue/src/App.vue'

describe('button', () => {
  test('alert render', () => {
    const wrapper = mount(Button)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
