var Header = React.createClass({

    render: function () {
        var h1Style = {
            marginLeft: '20',
            width:'100%'
        };
        var h2Style = {
            marginLeft: '40',
            width:'100%'
        };

        var headerStyle={
            width:'100%'
        }

        return (
            <header style={headerStyle}>
                <div class="">
                    <h1 style={h1Style}>陈光剑的个人网站</h1>
                    <h2 style={h2Style}>Jason Chen's Personal Website</h2>

                    <a href="https://github.com/Jason-Chen-2017/Jason-Chen-2017" class="button">
                        <small>View project on</small>
                        GitHub</a>
                </div>
            </header>
        );
    }
});

ReactDOM.render(<Header />, document.getElementById('header'));



