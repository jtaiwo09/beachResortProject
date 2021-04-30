import React, { Component } from 'react'
import Title from './Title';
import {services} from '../utils/dataServices';
export default class Services extends Component {
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {services.map((item, index) => (
                        <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}
