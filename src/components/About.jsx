import React from 'react'
import UserClass from '../utils/UserClass' 

class About extends React.Component {

  constructor(props){
    super(props)

    // console.log("parent ctor")
  }

  componentDidMount(){
    // console.log("Parent componetdid moutn")
  }

  render() {
    // console.log("parent render ")
    return (
      <>

      <UserClass name={"1st "} />
      {/* <UserClass name={"2nd "} /> */}
      </>
  
    )
  }
}


/*
 * parent ctor 
 * par render
 * child - 1 ctor
 * child 1 render
 * child1 compdidmount
 *   child - 2 ctor
 * child 2 render
 * child 2 compdidmount
 * par comp did mount
 */


export default About
