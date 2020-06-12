import React,{useState} from 'react' ;
import "./Avatar.css";
import 'tachyons';
import Modal from 'react-modal';

const Avatar =() =>{

	const[isActive,setActive]=useState(false)
	
	const openModal=() =>{

		setActive({
			isActive:true
		})

	}
 
 return(<div className="main-screen">
 		<div className="left-wrapper"></div>
 		<div className="main-wrapper ">
 			<div className="component">
 				<img className="image-style " src="//joeschmoe.io/api/v1/jon" alt="image" />
 				<h1>Ankit Tyagi</h1>
 				<p>Web Developer</p>
 				<button type="button" onClick={openModal} className="btn-style grow"> Click Me </button>
 				
 				<Modal isOpen={isActive} className="modal-style">

 					<p>paragraph</p>
 					<button type="button" onClick={openModal} className="btn-style grow"> Click Me </button>
 				</Modal>


 			</div>
 		</div>
 		<div className="right-wrapper"></div>
 		</div>)


}

export default Avatar;