import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';





function Questions() {
  return (
    <div className="question w-full h-217.5 px-17.5 bg-[#141414] pt-32">
      <div className="question-header w-full h-30 flex gap-y-5 items-center justify-between">
        <div className="qh-text-part">
          <h1 className="text-[28px] text-white">Frequently Asked Questions</h1>
          <p className="text-[rgba(153,153,153,1)]">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <div className="qh-button">
            <button className="px-4 py-4 bg-[#e50000] rounded-lg text-white" type="button">Ask a Question</button>
        </div>
      </div>
      <div className="question-main w-full h-155 flex">
        <div className="line-1 w-170 border-2 flex flex-col">
          <div className="quest w-full h-17 text-white">
          
            <Accordion sx={{backgroundColor: '#141414', color: 'white', width: '600px'}}>
        <AccordionSummary
          
          aria-controls="panel1-content"
          id="panel1-header"
          className="bg-amber-600"
        >
          <div className="num w-13.5 h-13.5 mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg">
            <h2>
              1
            </h2>
          </div>
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </div>
          <div className="quest w-full h-17 text-white">
          
            <Accordion sx={{backgroundColor: '#141414', color: 'white', width: '600px'}}>
          
        <AccordionSummary
          
          aria-controls="panel1-content"
          id="panel1-header"
          className="bg-amber-600"
          
        >
          <div className="num w-13.5 h-13.5 mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg">
            <h2>
              1
            </h2>
          </div>
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </div>

        </div>
        <div className="line-2">
            
        </div>
      </div>
    </div>
  );
}

export default Questions;
