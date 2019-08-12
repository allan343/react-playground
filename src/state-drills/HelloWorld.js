import React from 'react';


class HelloWorld extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
            who:"default "
        }
    }

    FriendButtonClick = () => {
        this.setState({
         who: "Hello Friend"
        })
      }

      ReactButtonClick = () => {
        this.setState({
         who: "Hello React"
        })
      }

      WorldButtonClick = () => {
        this.setState({
         who: "Hello World"
        })
      }

    render() {
        return (
          <div>
            <p>The current count: {this.state.who}</p>
            <button onClick={this.FriendButtonClick}>
              Friend        
            </button>
            <button onClick={this.ReactButtonClick} >
              React
            </button>
            <button onClick={this.WorldButtonClick}>
              World
            </button>
          </div>
        )
      }

}

export default HelloWorld