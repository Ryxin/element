// 负责导入所有的组件 进行包装处理  然后再导出
import Row from '@element/row'
import Col from '@element/col'
import Container from "@element/container"
import Header from "@element/header"
import Footer from "@element/footer"
import Main from "@element/main"
import Aside from "@element/aside"

const elements = [Row, Col, Container, Header, Footer, Main, Aside];
// 添加install方法 
const install = (Vue) => {
    //  循环组件
    elements.forEach(element => {
        Vue.component(element.name, element)
    })
};
// 默认导出
export default {
    install,
    Row,
    Col,
    Container,
    Header,
    Footer,
    Main,
    Aside
};
// 按需导出
export {
    install,
    Row,
    Col,
    Container,
    Header,
    Footer,
    Main,
    Aside
};