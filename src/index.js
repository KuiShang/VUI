/* Automatically generated by './build/bin/build-entry.js' */

import Checkbox from '../packages/checkbox/index.js'
import CheckboxGroup from '../packages/checkbox-group/index.js'
import IconButton from '../packages/icon-button/index.js'

const components = [
  Checkbox,
  CheckboxGroup,
  IconButton
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const vui = {
  version: '1.0.0',
  install,
  Checkbox,
  CheckboxGroup,
  IconButton
}

export default vui
