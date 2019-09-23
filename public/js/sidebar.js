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

        var footer = {
            fontSize: '0.8em',
            color: 'gray',
            textAlign: 'center'
        };

        return (
            <div style={helloWorldStyle}>
                <hr></hr>
                <aside id="sidebar">
                    <div onClick={this.goHome} style={btnStyle}>回到首页</div>
                    <div style={footer}>
                        <table>
                            <tbody>
                            <tr>
                                <td><p style={{color: 'green'}}>微信: universskyoh</p></td>
                                <td><a href={'mailto:universsky@163.com'}>universsky@163.com</a></td>
                                <td><a href={"https://www.jianshu.com/u/c55c7a9c8de6"} target={"_blank"}>我的简书</a>
                                </td>
                                <td><a href={"https://weibo.com/oranread"} target={"_blank"}>我的微博</a></td>
                                <td><a href={"https://blog.csdn.net/universsky2015"} target={"_blank"}>我的CSDN博客</a></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </aside>
                <hr></hr>
                <marquee style={{textAlign: 'center'}}
                         direction="left"
                         behavior="scroll"
                         scrollamount="50"
                         loop="-1"
                         hspace="90"
                         vspace="50">道之所在，虽千万人吾往矣；义之所当，千金散尽不后悔；情之所钟，世俗礼法如粪土；兴之所至，与君痛饮三百杯。
                </marquee>
            </div>
        );
    }
});


//执行渲染引擎
ReactDOM.render(
    <SideBar/>
    , document.getElementById('sidebar'));
