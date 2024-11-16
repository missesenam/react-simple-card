import React from 'react'
import Title from "./Title"
import {
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Description = () => {
  return (
    <>
      <CardBody>
         <Title />
         <Typography color="gray" className="mb-8 font-normal">
           Like so many organizations these days, Autodesk is a company in
           transition. It was until recently a traditional boxed software company
           selling licenses. Yet its own business model disruption is only part
           of the story
         </Typography>
      </CardBody>
    </>
  )
}

export default Description
