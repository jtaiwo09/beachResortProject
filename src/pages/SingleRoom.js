import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import defaultImg from '../images/room-1.jpeg';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to='/rooms' className='btn-primary'>
                    back to rooms
                </Link>
            </div>
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
        const [mainImg, ...otherImgs] = images;
        return (
            <>
                <StyledHero img={mainImg || defaultImg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        { otherImgs.map((item, index) => (
                            <img key='index' src={item} alt={name}/>
                        ))}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>
                                max capacity: {
                                    capacity > 1 ? `${capacity} person` : `${capacity} person`
                                }
                            </h6>
                            <h6>{pets ? 'pets allowed': 'no pet allowed'}</h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => (
                            <li key='index'>- {item}</li>
                        ))}
                    </ul>
                </section>
            </>
        )
    }
}
