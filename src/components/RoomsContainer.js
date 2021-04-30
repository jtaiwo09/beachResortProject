import React from 'react'
import { RoomConsumer, withRoomConsumer } from '../context';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

function RoomsContainer({context}){
    const {loading, sortedRooms, rooms } = context;
    if(loading) return <Loading />
    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>                       
        </div>
    )
}

 export default withRoomConsumer(RoomsContainer);


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=> {
//                     const {loading, sortedRooms, rooms } = value;
//                     if(loading) return <Loading />
//                     return (<div>
                                
//                                 Hello From room container
//                                 <RoomsFilter room={rooms}/>
//                                 <RoomsList room={sortedRooms}/>
//                             </div>
//                         )}
//             }
//         </RoomConsumer>
//     )
// }
