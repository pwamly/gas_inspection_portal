import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import ExpandMore from "@material-ui/icons/ExpandMore";

function RenderAccordion({ summary, details, go }) {
  const { nameid } = details.filter((el) => el.nameid)[0];
  const data = details.filter((el) => !el.nameid);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>{summary}</AccordionSummary>
      <AccordionDetails>
        <div>
          {data.map((data, index) => {
            const obkeys = Object.keys(data)[0];
            const value = data[obkeys];
            console.log(value, value);
            return (
              <ListItemText key={index}>{`${obkeys}:${value}`} </ListItemText>
            );
          })}
          <IconButton
            color="primary"
            component="span"
            onClick={() => {
              go(nameid);
            }}
          >
            <Edit />
          </IconButton>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default RenderAccordion;
