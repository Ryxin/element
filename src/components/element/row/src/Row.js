// 通过渲染函数来渲染组件
export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0, // 默认值
    },
    tag: {
      type: String,
      default: 'div',
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(
        val,
      ),
    },
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-row',
        {
          'el-row--flex': this.type === 'flex',
        },
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align !== 'top' && `is-align-${this.align}`,
      ],
      style: this.style,
    }, this.$slots.default);
  },
};
