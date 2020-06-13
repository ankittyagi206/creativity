import React from 'react';

const Avatarlist = (props) =>{
	return(
				
				<div className="avatar-style dib ma3">
 				<img className="image-style " src={`//joeschmoe.io/api/v1/${props.name}`} alt="image" />
 				<h1 className="heading">{props.name}</h1>
 				<p className="heading">{props.work}</p>
 				</div>
 				

		)
}

export default Avatarlist;