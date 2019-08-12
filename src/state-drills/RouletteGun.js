import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = { bulletInChamber: 8 };
  
  constructor(props)
    {
        super(props)
        this.state = {
          chamber: null,
          spinningTheChamber: false,
         
        }
    }
    componentWillUnmount() {
      clearTimeout(this.timeout)
    }

    PullTriggerClick = () => {
      this.setState({
        spinningTheChamber: true
      })


      
      //this.timeout = setTimeout(this.withinTimeout, 2000, 'That was really slow!');
      this.timeout = setTimeout(() => {
        const randomChamber = Math.ceil(Math.random() * 8)
        console.log("random Chamber is " + randomChamber);
        this.setState({
          chamber: randomChamber,
          spinningTheChamber: false,
        })
      }, 2000)
    
    
  }

  

renderDisplay(){

  const { bulletInChamber } = this.props;
  console.log("bullet is", typeof bulletInChamber);
  console.log("chamber is", typeof this.state.chamber);
  console.log("bullet is",  bulletInChamber);
  console.log("chamber is",  this.state.chamber);

  if(this.state.chamber==bulletInChamber)
  {
    console.log("bang");
    return 'BANG!!!!!'

 }
 else if(this.state.spinningTheChamber===true)
 {
  console.log("spinning");
  return 'spinning the chamber and pulling the trigger! ...'

 }

 else{
  console.log("safe");
  return 'you\'re safe!'
 }


}
    render() {
        return (
          <div>
            <p>{this.renderDisplay()}</p>
        
            <button onClick={this.PullTriggerClick}>
              Pull the Trigger!!
            </button>
          </div>
        )
      }

}

export default RouletteGun;
