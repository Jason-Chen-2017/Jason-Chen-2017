var Header = React.createClass({

    render: function () {
        var h1Style = {
            marginLeft: '2em'
        };
        var h2Style = {
            marginLeft: '6em'
        };

        return (
            <header>
                <div class="inner">
                    <h1 style={h1Style}>Jason-Chen-2017</h1>
                    <h2 style={h2Style}>东海陈光剑(Jason Chen , 2017) 个人博客</h2>

                    <a href="https://github.com/Jason-Chen-2017/Jason-Chen-2017" class="button">
                        <small>View project on</small>
                        GitHub</a>
                </div>
            </header>
        );
    }
});

ReactDOM.render(<Header />, document.getElementById('header'));



