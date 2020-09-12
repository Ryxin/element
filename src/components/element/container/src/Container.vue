<template>
  <div :class="['el-container',{'is-vertical':isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      validator: (val) => ["horizontal", "vertical"].includes(val),
    },
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    isVertical() {
      if(this.direction === "vertical") {
          return true;
      }else if(this.direction === "horizontal"){
          return false;
      }
      //判断container下的节点 (简写 三元表达式 )
      return this.$slots && this.$slots.default ? 
        this.$slots.default.some(vNode =>{
            // 与运算符，前者为真返回后者，前者为假返回前者，
            const tag = vNode.componentOptions && vNode.componentOptions.tag;
            return tag === 'el-header' || tag === 'el-footer'})
        : false;


      // if(this.$slots && this.$slots.default){
      //  return this.$slots.default.some(vNode =>{
      //      // 与运算符，前者为真返回后者，前者为假返回前者，
      //     const tag = vNode.componentOptions && vNode.componentOptions.tag;
      //     // 只有当 container下的节点是以下两者才返回真
      //     if(tag === 'el-header' || tag === 'el-footer'){
      //       return true;
      //     }
      //   })
      // }else{
      //    return false;
      // }
    }
}
}

</script>

<style lang="scss">
</style>