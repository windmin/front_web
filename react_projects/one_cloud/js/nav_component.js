var NavComponent = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" role="navigation">
                        <ul className="nav navbar-nav">
                            <li><a href="#">最新活动</a></li>
                            <li><a href="#">解决方案</a></li>
                            <li><a href="#">需求发布</a></li>
                            <li><a href="#">社区</a></li>
                            <li><a href="#">我的需求</a></li>
                            <li><a href="#">我的账号</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">登 录</a></li>
                            <li className="separator hidden-xs">|</li>
                            <li><a href="#">注 册</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            );
    }
});

ReactDOM.render(
    <NavComponent />,
    document.getElementById('outerContainer')
);