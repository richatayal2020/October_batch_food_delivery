import React  from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props)

        console.log("child ctor" + props.name)

        this.state =  {
            count : 10 ,
            isTrue : true , 
            jsonObj : {}
        }
    }

    async componentDidMount(){
        // console.log("Child componetdid moutn" + this.props.name)

        const data = await fetch("https://api.github.com/users/richatayal2020") ;
        const json = await data.json() ;
        // console.log(json);
        this.setState({
            jsonObj : json
        })
      }


      componentDidUpdate(){
        console.log("Component is update ")
      }


      componentWillUnmount(){
        console.log("component is unmount ")
      }

    render(){
        let {isTrue , count} = this.state
        // console.log(" child render" + this.props.name)
        return (
            <div className='border-black border-4 rounded-sm mt-5'>
            <h1 className='text-4xl strong '>About us page</h1> 
            <div>
            <h1>Name : {this.props.name}</h1>
            <h2>UserId : {this.state.jsonObj.login}</h2>
            <h2>description : {"here you will find code related to react java js dsa and more...."}</h2>
            <h2>count : {isTrue ? count : 0 }</h2>
            <button onClick={()=>{
                this.setState(
                    {count : count + 1} 
                    )
            }}>+</button>
            </div>
            </div>
        )
    }

}

export default UserClass 

