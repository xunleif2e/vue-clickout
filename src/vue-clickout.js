/**
  * vue-clickout
  * (c) 2018 shijianan
  * @license MIT
  */

const VueClickOut = {}

function isServer (vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

let clickout = {
  bind: function (el, { value }, vnode) {
    function handler (e) {
      let isInside = el.contains(e.target)
      if (value && value.length) {
        // 判断点击区域是否是目标区域
        for (let i = 0; i < value.length; i++) {
          let inside = vnode.context.$refs[value[i]]
          if (!inside) {
            break
          }
          if (inside.contains(e.target)) { // inside
            isInside = true
            break
          }
        }
      }
      if (!isInside) {
        let event = new Event('clickout')
        el.dispatchEvent(event)
      }
    }
    el.data = {
      handler
    }
    !isServer(vnode) && document.addEventListener('click', handler)
  },
  unbind (el, binding, vnode) {
    !isServer(vnode) &&  document.removeEventListener('click', el.data.handler)
    delete el.data
  }
}
/**
 * Plugin API
 */
VueClickOut.install = function (Vue, options) {
  Vue.directive('clickout', clickout)
}

/**
 * 浏览器环境自动安装
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueClickOut)
}

export default VueClickOut
export {
  clickout
}
