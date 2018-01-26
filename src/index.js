/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js'
import Cell from '../packages/cell/index.js'
import CellGroup from '../packages/cell-group/index.js'
import Checkbox from '../packages/checkbox/index.js'
import CheckboxGroup from '../packages/checkbox-group/index.js'
import Dialog from '../packages/dialog/index.js'
import Field from '../packages/field/index.js'
import IconButton from '../packages/icon-button/index.js'
import ImagePreview from '../packages/image-preview/index.js'
import Lazyload from '../packages/lazyload/index.js'
import List from '../packages/list/index.js'
import Loading from '../packages/loading/index.js'
import Loadmore from '../packages/loadmore/index.js'
import NavBar from '../packages/nav-bar/index.js'
import Popup from '../packages/popup/index.js'
import Progress from '../packages/progress/index.js'
import Swipe from '../packages/swipe/index.js'
import SwipeItem from '../packages/swipe-item/index.js'
import Switch from '../packages/switch/index.js'
import Tab from '../packages/tab/index.js'
import Tabs from '../packages/tabs/index.js'
import Toast from '../packages/toast/index.js'
const components = [
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Field,
  IconButton,
  ImagePreview,
  Lazyload,
  List,
  Loading,
  Loadmore,
  NavBar,
  Popup,
  Progress,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabs,
  Toast
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    if (component.name === 'VuLazyload') {
      Vue.use(component, {lazyComponent: true})
    } else {
      Vue.component(component.name, component)
    }
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const vui = {
  version: '1.0.0',
  install,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Field,
  IconButton,
  ImagePreview,
  Lazyload,
  List,
  Loading,
  Loadmore,
  NavBar,
  Popup,
  Progress,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabs,
  Toast
}

export default vui
