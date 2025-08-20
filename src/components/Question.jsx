import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { faqs } from "../store/store";
import AddIcon from "@mui/icons-material/Add";

const Question = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          disableGutters
          elevation={0}
          sx={{
            borderBottom: "1px solid #ddd",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#ff007f" }} />}
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
            <Typography variant="body1" color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
export default Question;
