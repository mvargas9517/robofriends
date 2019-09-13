import React from 'react';
import '../robots';

function Card(props){
    // Use this const so you don't have to use props.name etc.
    const { name, email, id } = props;
    return(
        

        <div className='tc bg-light-blue dib br4 pa2 ma3 dim bw2 shadow-4'>
            {/* Dynamic Cards using props.id */}
        <img alt='robots' src={`https://robohash.org/${id}?150x150`}/>

        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

        </div>
    );
}

export default Card;