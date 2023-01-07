import React from 'react';
import './App.css';
import {styled} from "@mui/system";

const QuestionAnswerWrapper = styled('div')(
  ({theme}) => `
  display: block;
  border: 2px solid #0a0;
  border-radius: 10px;
  background: #efe;
  max-width: 90%;
  margin: 20px auto;
  `
)

const Question = styled('div')(
  ({theme}) => `
  display: block;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  background: #efe;
  max-width: 950px;
  color: #0a0;
  font-weight: bold;
  `
)

const Answer = styled('div')(
  ({theme}) => `
  display: block;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  background: #efe;
  max-width: 950px;
  color: #a00;
  font-weight: bold;
  `
)

export interface QuestionAnswerProps {
  question: string;
  answer: string;
}

function QuestionAnswer(props: QuestionAnswerProps) {
  return (
    <QuestionAnswerWrapper>
      <Question>
        Q: {props.question}
      </Question>
      <Answer>
        A: {props.answer}
      </Answer>
    </QuestionAnswerWrapper>
  );
}

export default QuestionAnswer;
