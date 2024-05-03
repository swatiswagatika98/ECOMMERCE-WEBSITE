import React from 'react';
import { GiTriangleTarget } from 'react-icons/gi';
import './Home.css'
import Tours from './Tours';

export default function Home() {
    return (
        <>
           <div className='home__heading'>
            <div className='home__p'>
                <h1 className='home__h1'>The Generics</h1>
                <p className='home__p' style={{ display: 'inline-block', border: '1px solid #56CCF2' }}>Get our Latest Album</p>
                <div >
                    <GiTriangleTarget className='music__playerBtn' />
                </div>
            </div>

        </div>
        <Tours/>
        </>
     
    );
}
