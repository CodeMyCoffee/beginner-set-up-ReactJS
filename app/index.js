var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({


    render: function(){
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
})

var app = document.getElementById("app");

ReactDOM.render(<MyComponent/>,app);