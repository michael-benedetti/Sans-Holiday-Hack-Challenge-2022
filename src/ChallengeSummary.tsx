import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from "react";
import {styled} from "@mui/system";
import {AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ParkIcon from '@mui/icons-material/Park';

export const StyledAccordionSummary = styled(AccordionSummary)(
  ({theme}) => ({
    background: "radial-gradient(#384862, #22324a)",
    border: "2px solid #black",
    fontWeight: "bold",
  })
)

export const DifficultyContainer = styled('div')(
  ({theme}) => ({
    marginLeft: "auto",
    paddingRight: "20px",
  })
)

export const TitleContainer = styled('div')(
  ({theme}) => ({
    marginLeft: "20px",
    color: "white",
    lineHeight: "25px",
    textAlign: "left",
  })
)

export interface ChallengeSummaryProps {
  title: string;
  difficulty: number;
}

function ChallengeSummary(props: ChallengeSummaryProps) {
  return (
    <StyledAccordionSummary expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}>
      <CheckCircleIcon sx={{color: '#0d0;'}}/>
      <TitleContainer>
        {props.title}
      </TitleContainer>
      <DifficultyContainer>
        {[...Array(props.difficulty)].map((d, i) => {
          return <ParkIcon key={`r-${i}`} sx={{color: 'red'}}/>
        })}
        {[...Array(5 - props.difficulty)].map((d, i) => {
          return <ParkIcon key={`w-${i}`} sx={{color: 'white'}}/>
        })}
      </DifficultyContainer>
    </StyledAccordionSummary>
  );
}

export default ChallengeSummary;