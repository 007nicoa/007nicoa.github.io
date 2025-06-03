import { NavLink } from "react-router-dom"
import "./WorkCardStyles.css"

import React from 'react'

const WorkCard = () => {
  return (
    <div className="project-card">
          <img src="" alt="image" />
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This is a text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">View</NavLink>
              <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
  )
}

export default WorkCard
