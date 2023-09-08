import React,{useContext, useEffect, useRef, useState} from 'react';
import EventContext from "../context/events/EventContext";
import Slide from "./Slide";
import dayjs from 'dayjs';
//event is parent component and slide is child component
//isRender is responsible for re rendering of parent component we are passing it as props to slide component
//when the value of isrender is changed in slide component parent component along with child component is rerendered
const Events = () => {
    const context = useContext(EventContext);
    const {events ,getallEvents,getallrequiredEvents} = context;
    const [isRender,setisRender]=useState(0);
    useEffect(() => {
      if(localStorage.getItem('token'))
      { getallrequiredEvents();}
    else
    {getallEvents();}
        // eslint-disable-next-line
    }, [isRender])
    
    const today = dayjs().startOf('day');
    const filteredEvents = events.length>0 && events.filter((event) =>
    dayjs(event.date).isSame(today, 'day') || dayjs(event.date).isAfter(today)
  );//events which are not expired
    
  return (
    <div className="row my-3 mx-2">
      <div className="container mx-2">
      {filteredEvents.length === 0 && "No notes to display"}
      </div>
      {filteredEvents.length > 0?filteredEvents.map((e)=>{
        return <Slide key={e._id} event = {e} isvolunteer={false} setisRender={setisRender} isRender={isRender}/>
      }):"No notes to display"}

    </div>
     
  )
}

export default Events
