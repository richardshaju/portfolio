import React from 'react'
import "./License.css"
function License() {
    return (
        <div className='license'>
            <div className="license-parent">
                <img src={require('./license.jpg')} alt=""/>
            </div>
        </div>
    )
}

export default License