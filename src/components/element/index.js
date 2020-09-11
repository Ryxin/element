// 负责导入所有的组件 进行包装处理  然后再导出
import Row from '@element/row'
import Col from '@element/col'
const elements = [Row, Col];
const install = (Vue) => {
    elements.forEach(element => {
        Vue.component(element.name, element)
    })
}

export default {
    install,
    Row,
    Col,
}

export {
    install,
    Row,
    Col,
}