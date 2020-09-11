// 通过渲染函数来渲染组件
export default {
  name: 'ElCol',
  props: {
    // 栅格占据的列数
    span: {
      type: Number,
      default: 24, // 默认值
    },
    // 栅格左侧间隔的格数
    offset: {
      type: Number,
      default: 0, // 默认值
    },
    // 栅格向右移动的格数(相对于自己)
    push: {
      type: Number,
      default: 0, // 默认值
    },
    // 栅格向左移动的格数(相对于自己)
    pull: {
      type: Number,
      default: 0, // 默认值
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ELRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          classList.push(
            prop === 'span'
              ? `el-col-${this[prop]}`
              : `el-col-${prop}-${this[prop]}`,
          );
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') { // 传入的是数字
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') { // 传入的是对象
          const props = this[size];
          Object.keys(props).forEach((prop) => { // 把对象的key取出来循环
            classList.push(
              prop === 'span' ? `el-col-${size}-${props[prop]}`
                : `el-col-${size}-${prop}-${props[prop]}`,
            );
          });
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-col', this.classList],
      style: this.style,
    }, this.$slots.default);
  },
};
