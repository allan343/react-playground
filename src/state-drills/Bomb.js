import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0,
            display: ""
            };
      
      }
 
      componentDidMount() {
    
        setInterval(() => {
            const newCount = this.state.count + 1
            var newDisplay = "";
            if(newCount  >= 8){
                newDisplay= 'BOOM!!!!';
                clearInterval(this.interval);
                console.log(newCount);
                console.log(newDisplay);
            }
            else{
            if (newCount % 2 === 0)
            {
                newDisplay= 'tick';
                console.log(newCount);
                console.log(newDisplay);
            }
            else{
                newDisplay= 'tock';
                console.log(newCount);
                console.log(newDisplay);
            }
        }
          this.setState({
           count: newCount,
           display: newDisplay
          })
        }, 1000)
      }

      componentWillUnmount() {
        clearInterval(this.interval)
      }

    render() {
      console.log('render')
        return (
            <div>{this.state.display}</div>
          )
  }
}

export default Bomb