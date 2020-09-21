// 导入组件，组件必须声明 name
import slideValid from './slideVerify.vue';
 
// 为组件添加 install 方法，用于按需引入
slideValid.install = function (Vue) {
    Vue.component(slideValid.name, slideValid)
}
 
export default slideValid