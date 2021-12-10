import React from "react"

import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"

import * as destinationsListStyles from "./DestinationsList.module.scss"

const DestinationsList = () => {
  return (
    <div className={destinationsListStyles.destinationsContainer}>
      <h1>Destinations</h1>
    </div>
  )
}

export default DestinationsList
