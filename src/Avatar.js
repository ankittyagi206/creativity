import React,{Component} from 'react' ;
import "./Avatar.css";
import 'tachyons';
import Avatarlist from './Avatarlist';



class Avatar extends Component{
	
	constructor(props){
		super(props);
		this.state ={

			name:"Welcome Ankit"
		}
	}

Changeheading(){

		this.setState({

			name:"Ok done!!"
		})
	}
	render(){

	const array =[{

		id:1,
		name:"Ankit",
		work:"Web Developer"


	},

	{

		id:2,
		name:"Anju",
		work:"Home Maker"


	}, 

	{

		id:3,
		name:"AnandTyagi",
		work:"Sales Manage"


	},

		{

		id:4,
		name:"Shweta",
		work:"Software Developer"


	}



	]

	const newArray = array.map((y,iter)=>
	{
		return <Avatarlist id={array[iter].id}  name={array[iter].name}  work={array[iter].work}/>
	})

 		return(<div className="main-screen">
 				<div className="left-wrapper"></div>
 				
 				<div className="main-wrapper ">
 					<div className="body-wrapper">
 					<h1>{this.state.name}</h1>
 					{newArray}
 					<button type="button" onClick={()=>this.Changeheading()} className="btn-style grow"> Click Me </button>
 					</div>
 				</div>
 				<div className="right-wrapper"></div>
 				</div>)

 		}
}

export default Avatar;