//es6语法引入mock模块
import Mock from 'mockjs'

Mock.mock("http://localhost:8080/user",{
    'name':'@name', //随机生成姓名
    'email':'@email',
    'age|1-10':5
    //其他数据
});

Mock.mock("http://localhost:8080/menu",{
    'id':'@increment',
    'name':'menu',
    'order|10-20':12
    //其他数据
});