import * as React from 'react';
import img from './images/beisen.png';
import './style.scss'

export default class ReactPackageTemplate extends React.Component<{},{}>{
    render(){
        return <div className='xxx-x'>
            <img src={img} />
        </div>
    }
}