import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton222.css";

function GetAQuoteButton222(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i2601279164120TimelineData);
  }, []);

  return (
    <div className="i26012791-64120 component component-wrapper not-ready">
      <div className="master-button-ZLKxLn">
        <div className="button-i2601279164-xmtjRp valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2601279164120TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012791-64120",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default GetAQuoteButton222;
