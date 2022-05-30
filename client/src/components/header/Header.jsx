import "./header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range"
import React,{useState} from 'react'
import {format} from "date-fns"


function Header() {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [Opendate, setOpendate] = useState(false);
    const [OpenOptions, setOpenOptions] = useState(false);
    const [Options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    });

    const handleOptions = (name,operation)=>{
        setOptions(prev=>{
            return{
                ...prev,
                [name]: operation === "i" ? Options[name] + 1 : Options[name] -1
            }
        })
    }
   


  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or more
                with a free Lamabooking account
            </p>
            <button className="headerBtn">Sing in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText" onClick={()=>{setOpendate(!Opendate)}}>{`${format(date[0].startDate, "MM/dd/yyyy")} to
                    ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {Opendate && <DateRange editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"/>}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText">{`${Options.adult} adult · ${Options.children}  children · ${Options.room} · room`} </span>
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button className="optionCounterBtn" onClick={handleOptions("adult","i")}>-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterBtn">+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterBtn">-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterBtn">+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button className="optionCounterBtn">-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterBtn">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header