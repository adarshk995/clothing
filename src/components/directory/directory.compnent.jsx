import React from 'react';

import MenuItem from '../menu-items/menu-items.component';

import './directory.style.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'covid19 essential',
                    imageUrl:'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.png',
                    size:'medium',
                    id:1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.pexels.com/photos/3998647/pexels-photo-3998647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.png',
                    size: 'medium',
                    id:2
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.png',
                    size: 'medium',
                    id:3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.png',
                    size: 'large',
                    id:4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/3766199/pexels-photo-3766199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.png',
                    size: 'large',
                    id:5
                },
            ]
        };
    }
    render() {
        return (
            <div className='directory-menu'>
                { 
                  this.state.sections.map(({title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title}  imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>

        )
    }

}


export default Directory;
