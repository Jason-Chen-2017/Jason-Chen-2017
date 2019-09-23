/**
 * Created by jack on 2017/3/3.
 */


var SideBar = React.createClass({
    getInitialState: function () {
        return {};
    },
    goHome: function (event) {
        goHome();
    },

    render: function () {

        var helloWorldStyle = {
            textAlign: 'left',
        };

        var btnStyle = {
            margin: '1em 0em',
            padding: '1em',
            border: '1px solid',
            borderRadius: '1em',
            borderColor: 'dodgerblue',
            color: 'cornflowerblue',
            textAlign: 'center',
        };

        return (
            <div style={helloWorldStyle}>
                <hr></hr>
                <aside id="sidebar">

                    <div>
                        关于作者: 陈光剑,江苏东海人。程序员,诗人,作家。
                    </div>
                    <div>邮箱: universsky@163.com</div>
                    <div>微信: universskyoh</div>
                    <div><a href={"https://www.jianshu.com/u/c55c7a9c8de6"} target={"_blank"}>简书</a></div>
                    <div><a href={"https://weibo.com/oranread"} target={"_blank"}>微博</a></div>

                    <hr></hr>
                    <div data-myattribute="somevalue">
                        <div>道之所在，虽千万人吾往矣；</div>
                        <div>义之所当，千金散尽不后悔；</div>
                        <div>情之所钟，世俗礼法如粪土；</div>
                        <div>兴之所至，与君痛饮三百杯.</div>
                    </div>

                    <div class="repo-owner"> Author:
                        <a href="https://github.com/Jason-Chen-2017" target="_blank">Jason Chen,2017</a>
                    </div>
                    <div onClick={this.goHome} style={btnStyle}>回到首页</div>
                </aside>
            </div>
        );
    }
});


//执行渲染引擎
ReactDOM.render(<SideBar/>, document.getElementById('sidebar'));
