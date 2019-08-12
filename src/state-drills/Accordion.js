import React from "react";

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
   
    state ={
      currentSectionIndex: null
    };

    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
      }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li>
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
          </li>
        ))
      }
      renderContent() {
        if(this.state.currentSectionIndex!==null)
        {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
          <div className='content'>
            {currentSection.content}
          </div>
        )
        }
      }



    render() {
        return (
          <ul>
              
            
          {this.renderButtons()}
        {this.props.sections.length && this.renderContent()}
                
          </ul>
        )
     
      }
  }

export default Accordion;