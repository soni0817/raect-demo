import {Menu} from  "antd";
import React from 'react'

const Dropmenu = () => {
  return (
    <div className="">
       <Menu
       items={[
        {
          label:"Lorem ipsum 1",
          key:"dashboard",
          children:[
          { label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Lorem ipsum 1
          </a>
        ),Key:"rev"}, 
          {label:"Lorem ipsum 1",Key:"exp"}, 
        ]},
       ]}
       >

       </Menu>
    </div>
  )
}

export default Dropmenu;
