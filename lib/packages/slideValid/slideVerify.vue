<template>
  <div class="jc-component__range">
    <div class="jc-range" :class=" rangeStatus ? 'success' : '' ">
      <i @mousedown="rangeMove" :class="rangeStatus?successIcon:startIcon"></i>
      {{rangeStatus ? successText : startText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'slide-valid',
  props: {
    value:{
      type: Boolean,
      default(){
        return false
      }
    },
    //成功图标
    successIcon: {
      type: String,
      default: "el-icon-success"
    },
    //成功文字
    successText: {
      type: String,
      default: "验证成功"
    },
    //开始的图标
    startIcon: {
      type: String,
      default: "el-icon-d-arrow-right"
    },
    //开始的文字
    startText: {
      type: String,
      default: "请拖住滑块，拖动到最右边"
    }
  },
  computed:{
    rangeStatus(){
      return this.value
    },
  },
  data() {
    return {
      disX: 0
    };
  },
  methods: {
    //滑块移动
    rangeMove(e) {
      let ele = e.target;
      let startX = e.clientX;
      let eleWidth = ele.offsetWidth;
      let parentWidth = ele.parentElement.offsetWidth;
      let MaxX = parentWidth - eleWidth;
      if (this.rangeStatus) {
        //不运行
        return false;
      }
      document.onmousemove = e => {
        let endX = e.clientX;
        this.disX = endX - startX;
        if (this.disX <= 0) {
          this.disX = 0;
        }
        if (this.disX >= MaxX - eleWidth) {
          //减去滑块的宽度,体验效果更好
          this.disX = MaxX;
        }
        ele.style.transition = ".1s all";
        ele.style.transform = "translateX(" + this.disX + "px)";
        e.preventDefault();
      };
      document.onmouseup = () => {
        if (this.disX !== MaxX) {
          ele.style.transition = ".5s all";
          ele.style.transform = "translateX(0)";
          //失败
           this.$emit('input',false);
        } else {
          //成功
          this.$emit('input',true);
        }
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
};
</script>

<style lang="less" scoped>
.jc-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.jc-component__range {
  width: 100%;
  .jc-range {
    background-color: #e9e9e9;
    position: relative;
    transition: 1s all;
    user-select: none;
    color: #585858;
    .jc-flex;
    height: 2.2rem; /*no*/
    &.success {
      background-color: #3bc923;
      color: #fff;
      i {
        color: #3bc923;
      }
    }
    i {
      position: absolute;
      left: 0;
      width: 3rem; /*no*/
      height: 100%;
      color: #3fcd26;
      background-color: #fff;
      border: 1px solid #d8d8d8;
      cursor: pointer;
      font-size: 24px;
      .jc-flex;
    }
  }
}
</style>