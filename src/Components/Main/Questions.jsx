import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaPlus } from "react-icons/fa";





function Questions() {
  return (
    <div className="question w-full min-h-screen bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-17.5 py-12 md:py-16 lg:py-32">
    {/* Header */}
    <div className="question-header w-full flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between mb-8 md:mb-12 lg:mb-16">
        <div className="qh-text-part flex-1">
            <h1 className="text-xl md:text-2xl lg:text-[28px] text-white font-semibold mb-2 md:mb-3">
                Frequently Asked Questions
            </h1>
            <p className="text-sm md:text-base text-[rgba(153,153,153,1)] max-w-3xl">
                Got questions? We've got answers! Check out our FAQ section to find
                answers to the most common questions about StreamVibe.
            </p>
        </div>
        <div className="qh-button flex-shrink-0 w-full md:w-auto">
            <button 
                className="w-full md:w-auto px-5 md:px-6 py-3 md:py-4 bg-[#e50000] hover:bg-[#c50000] rounded-lg text-white text-sm md:text-base font-medium transition-colors" 
                type="button"
            >
                Ask a Question
            </button>
        </div>
    </div>

    {/* Accordion Grid */}
    <div className="question-main w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Column 1 */}
        <div className="accordion-column space-y-3 md:space-y-4">
            {/* Question 1 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:mr-5 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0">
                        1
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        What is StreamVibe?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Question 2 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:mr-5 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0">
                        2
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        How much does StreamVibe cost?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        StreamVibe offers flexible pricing plans starting from $8.99/month for our basic plan.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Question 3 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="felx num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:pr-0 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0 ">
                        3
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        What content is available on StreamVibe?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        We offer thousands of movies, TV shows, documentaries, and original content across all genres.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Question 4 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:mr-5 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0">
                        4
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        How do I cancel my subscription?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        You can cancel your subscription at any time from your account settings. No cancellation fees.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>

        {/* Column 2 */}
        <div className="accordion-column space-y-3 md:space-y-4">
            {/* Question 5 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:mr-5 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0">
                        5
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        Can I watch on multiple devices?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        Yes! Depending on your plan, you can stream on 2-4 devices simultaneously.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Question 6 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel6-content"
                    id="panel6-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:mr-5 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0">
                        6
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        Is there a free trial available?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        Yes! We offer a 7-day free trial for new users. No credit card required.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Question 7 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel7-content"
                    id="panel7-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:mr-5 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0">
                        07
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        How do I contact customer support?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        Our support team is available 24/7 via live chat, email, or phone.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Question 8 */}
            <Accordion 
                sx={{
                    backgroundColor: 'rgba(15,15,15,1)',
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(38,38,38,1)',
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(25,25,25,1)',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus className="text-white text-lg" />}
                    aria-controls="panel8-content"
                    id="panel8-header"
                    sx={{
                        minHeight: '70px',
                        '&.Mui-expanded': {
                            minHeight: '70px',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    }}
                >
                    <div className="num w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5 mr-3 md:mr-5 lg:mr-7 flex items-center justify-center bg-[rgba(38,38,38,1)] rounded-lg text-sm md:text-base flex-shrink-0">
                        08
                    </div>
                    <Typography component="span" className="text-sm md:text-base lg:text-lg font-medium">
                        Can I download content for offline viewing?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                    <Typography className="text-sm md:text-base text-[rgba(153,153,153,1)] pl-0 md:pl-16 lg:pl-20">
                        Yes! Premium plans include offline download functionality for mobile devices.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
</div>
  );
}

export default Questions;
