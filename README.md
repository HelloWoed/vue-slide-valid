# vue-slide-valid

## 安装
```
npm i vue-slide-valid
```

### 引入
```javascript
//main.js
import slideValid from 'vue-slide-valid';

Vue.use(slideValid);
```

### 使用
```html
<!-- 配合form表单使用，可以结合常见form组件的校验进行验证,也可以单独使用，支持v-model -->
<el-form-item prop="isValid">
    <slide-valid v-model
    v-model="loginForm.isValid"
    :startText="startText" 
    :successText="successText" />
</el-form-item>
```
```javascript
...
data(){
    return {
      loginForm:{},
      startText: '请拖住滑块，拖动到最右边',
      successText: '验证成功'
    }
},
computed:{
    loginRules(){
      return {
        isValid: [
          {require: true,message: '请滑动验证',trigger: 'change'}
        ]
      }
    }
},
...
```

