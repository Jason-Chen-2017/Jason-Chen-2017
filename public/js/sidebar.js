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
    goFreeBook: function () {
        goFreeBook();
    },

    render: function () {

        var helloWorldStyle = {
            textAlign: 'left',
        };

        var btnStyle = {
            marginTop: '1em',
            marginBottom: '1em'
        };

        return (
            <div style={helloWorldStyle}>
                <aside id="sidebar">
                    <button onClick={this.goHome} style={btnStyle}>博客首页</button>
                    <p class="repo-owner"> Author: <a href="https://github.com/Jason-Chen-2017" target="_blank">Jason Chen,2017</a>.</p>
                    <p>作者:
                        陈光剑，江苏东海人, 号行走江湖一剑客，字之剑。程序员，诗人, 作家。邮箱: universsky@163.com, 微信:universskyoh</p>

                    <button onClick={this.goFreeBook} style={btnStyle}>光剑免费图书馆</button>

                    <p data-myattribute="somevalue">道之所在，虽千万人吾往矣；义之所当，千金散尽不后悔；情之所钟，世俗礼法如粪土；兴之所至，与君痛饮三百杯.(Jason
                        Chen,2017)</p>

                </aside>
            </div>
        );
    }
});


//执行渲染引擎
ReactDOM.render(<SideBar />, document.getElementById('sidebar'));
