import React, { useState } from "react";

type UncontroledAccardionPropsType = {
  titleValue: string;
  // collapsed:boolean
};

export function UncontroledAccardion(props: UncontroledAccardionPropsType) {
  let [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <AccardionTitle title={props.titleValue}  onClick={() => {setCollapsed(!collapsed); }} />
      {/* <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        Togle
      </button> */}
      {!collapsed && <AccardionBody />}
    </div>
  );
}

type AccardionTitlePropsType = {
  title: string;
  onClick: ()=> void
};

function AccardionTitle(props: AccardionTitlePropsType) {
  return (
    <>
      <h3 onClick={()=>{props.onClick()}}>--{props.title}--</h3>
    </>
  );
}
function AccardionBody() {
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
