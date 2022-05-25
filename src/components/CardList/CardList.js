import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList({cats}) {
    return (
        <div className='cardList'>
          {cats.map((cat) => 
          (<Card cat={cat} key={cat.id}/>)
        )}
        </div>
        
    )
}
