var Header = React.createClass({

    render: function () {
        return (
            <header>
                <h1>东海陈光剑的个人网站</h1>
                <h2><a href={'https://jason-chen-2017.github.io/Jason-Chen-2017/'}> Jason Chen's Personal Website </a>
                </h2>
            </header>
        );
    }
});

ReactDOM.render(<Header/>, document.getElementById('header'));



