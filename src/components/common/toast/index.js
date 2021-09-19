import Toast from './Toast.vue'
import Vue from 'vue'

const obj = {}

obj.install = function() {
    
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    //2.根据组件构造器,创建一个组件对象
    const toast = new toastConstructor()

    //3.将组件对象手动挂载到元素上
    toast.$mount(document.createElement('div'))

    //4.toast.$el对应的就是创建的div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj