//        //注册组建类 HelloComponent
//        var HelloComponent = React.createClass({
//            //定义函数 render
//            render: function(){
//                //创建虚拟DOM，（元素，属性{attr:'value'}，内容，子虚拟DOM）
////                return React.createElement('h1',null,'Hello world');
//                var child1 = React.createElement('li',{className: 'child-li'},'text1');
//                var child2 = React.createElement('li',{className: 'child-li'},'text2');
//                var parent = React.createElement('ul',{className: 'parent-ul'},child1,child2);
//                return parent;
//            }
//        });
//
//        ReactDOM.render(
//            React.createElement(HelloComponent,null),
//            document.getElementById('reactContainer')
//        );

//用JSX代替JavaScript，是代码更简洁
var HelloComponent = React.createClass({
    render: function () {
        //style的写法和css不同，是个javascript的对象，property名遵循驼峰式，值以''引起来
        var h1 = <h1 className="class-name" style={{color: 'red', fontSize: '13px'}}>Hello world</h1>;
        // return <h1 class="class-name">Hello world</h1>;
        return h1;
    }
});

ReactDOM.render(
    <HelloComponent />,
    document.getElementById('reactContainer')
);