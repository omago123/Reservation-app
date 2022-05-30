import React,{useState} from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import { DateRange } from "react-date-range";


function List() {

  const location = useLocation()

  const [Destination, setDestination] = useState(location.state.Destination);
  const [date, setDate] = useState(location.state.date);
  const [Options, setOptions] = useState(location.state.Options);
  const [OpenDate, setOpenDate] = useState(false);
  
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='listContainer'>
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder='' type="text"></input>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!OpenDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,"MM/dd/yyyy")}`}
              </span>
              {OpenDate && <DateRange editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                    />}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>

    </div>
  )
}

export default List