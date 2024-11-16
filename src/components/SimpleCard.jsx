// import React, { Component } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";

// class HorizontalCard  extends Component{
//   render(){
//     return(
//       <Card className="w-full max-w-[48rem] flex-row">
//       <CardHeader
//         shadow={false}
//         floated={false}
//         className="m-0 w-2/5 shrink-0 rounded-r-none"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
//           alt="card-image"
//           className="h-full w-full object-cover"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h4" color="blue-gray" className="mb-2">
//           Lyft launching cross-platform service this week
//         </Typography>
//         <Typography color="gray" className="mb-8 font-normal">
//           Like so many organizations these days, Autodesk is a company in
//           transition. It was until recently a traditional boxed software company
//           selling licenses. Yet its own business model disruption is only part
//           of the story
//         </Typography>
//       </CardBody>
//     </Card>
//     )
//   }
// }

// export default HorizontalCard


import React, { Component } from "react";
import Image from "./Image";
import Desciption from "./Description"
import {
  Card,
} from "@material-tailwind/react";

class HorizontalCard  extends Component{
  render(){
    return(
      <>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-[48rem] flex-row">
            <Image  />
            <Desciption/>
        </Card>
      </div>
      </>
    )
  }
}

export default HorizontalCard


