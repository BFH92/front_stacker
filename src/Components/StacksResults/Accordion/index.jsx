import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./accordion.scss";

export const Accordions = ({ stacks }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            Backend Frameworks & Languages
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 1).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 1)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                            <h5>Entreprises qui utilisent {stack.name} : {stack.companies_count}</h5>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            Frontend Frameworks & Languages
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 2).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 2)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>DevOps</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 3).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 3)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>Data</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 4).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 4)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>Mobile</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 5).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 5)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>Project Management</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 6).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 6)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>IDE</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 7).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 7)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>NoCode</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Total:
            {stacks.filter((stack) => stack.stack_category_id === 8).length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              <ul>
                <div>
                  {stacks
                    .filter((stack) => stack.stack_category_id === 8)
                    .map((stack) => (
                      <li key={stack.id}>
                        <div className="container__stack">
                          <div className="name">
                            <h2>{stack.name}</h2>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
