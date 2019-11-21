import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red','pink','orange','blue','yellow'];
    const rundomColor = colors[Math.floor(Math.random()*5)];

    const className = rundomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}
export default Rainbow;