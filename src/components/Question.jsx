import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { faqs } from "../store/store";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";

const Question = () => {
  const [expanded, setExpanded] = useState(null);
  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : null); // only one open at a time
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          disableGutters
          elevation={0}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
          sx={{
            borderBottom: "1px solid #ddd",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === faq.id ? (
                <RemoveIcon sx={{ color: "#ff007f" }} />
              ) : (
                <AddIcon sx={{ color: "#ff007f" }} />
              )
            }
            sx={{
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mb: "15px" }}>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
export default Question;
