import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./accordion.scss";
import { CardContent } from "@mui/material";
import { Card } from "@material-ui/core";

export const Accordions = ({ stacks }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel, sx) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="container__stack--all">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "75%", mt: 6 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Backend Frameworks & Languages
          </Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card >
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
        sx={{ width: "75%", mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Frontend Frameworks & Languages
          </Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card>
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
        sx={{ width: "75%", mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>DevOps</Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card>
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
        sx={{ width: "75%", mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>Data</Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card>
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
        sx={{ width: "75%", mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>Mobile</Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card>
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
        sx={{ width: "75%", mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Project Management
          </Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card>
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
        sx={{ width: "75%", mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>IDE</Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card>
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
        sx={{ width: "75%", mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>NoCode</Typography>
          <Typography sx={{ color: "purple" }}>
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
                          <Card>
                            <CardContent sx={{ml:4}}>
                              <Typography variant="h6" color="secondary">
                                {stack.name}
                              </Typography>
                              <Typography variant="overline">
                                Entreprises qui utilisent {stack.name} :{" "}
                                {stack.companies_count}
                              </Typography>
                            </CardContent>
                          </Card>
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
