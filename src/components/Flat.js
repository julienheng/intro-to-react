// import React from "react"
import { useState } from "react";

const Flat = ({flat, setSelectedFlat}) => {

  return (
		<div className="flat" onClick={ () => setSelectedFlat(flat)} >
			<div className="flat-image">
				<img src={flat.imageUrl} alt="" />
			</div>
			<div className="flat-name">
        { flat.name }
      </div>
		</div>
  )
}

export default Flat
