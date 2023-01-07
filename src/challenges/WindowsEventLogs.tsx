import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import QuestionAnswer from "../QuestionAnswer";
import React from "react";

function WindowsEventLogs() {
  return (
    <Accordion>
      <ChallengeSummary title={"Windows Event Logs"} difficulty={2}/>
      <AccordionDetails>
        <ChallengeDetails>
          Investigate the Windows event log mystery in the terminal or offline. Get hints for this challenge by typing hint in the upper panel of the Windows Event Logs terminal.
        </ChallengeDetails>
        <Content>
          Next, we encounter <Pop>Dusty Giftwrap</Pop> who has this to say:
        </Content>
        <QuoteCard
          character={characters.dusty_giftwrap}
          quote={0}
        />
        <Content>
          Logging into the nearby terminal, we get the following prompt:
        </Content>
        <TerminalPrompt>
          {`Smilegol successfully downloaded his keylogger and has gathered the admin credentials!
          We think he used powershell to find the Lembanh recipe and steal our secret ingredient.
          Luckily, we enabled powershell auditing and have exported the Windows PowerShell logs to a flat text file.
          Please help me analyze this file and answer my questions.
          Ready to begin?`}
        </TerminalPrompt>
        <QuestionAnswer
          question={"What month/day/year did the attack take place? For example, 09/05/2021."}
          answer={"12/24/2022"}
        />
        <Content>
          For this task, we can look for dates where a significant number of events occurred. To accomplish this we can
          run:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {`$ cat powershell.evtx.log | grep Verbose | sort | uniq -c | sort`}
        </StyledSyntaxHighligher>
        <Content>
          We receive the following results with our answer <IC>12/24/2022</IC>:
        </Content>
        <ContentImage src={"images/ps_event_grep.png"}/>
        <QuestionAnswer
          question={"The contents of a file were retrieved by the attacker and stored to a variable. Submit the full powershell line that performed this action."}
          answer={"$foo = Get-Content .\\Recipe| % {$_ -replace 'honey', 'fish oil'} $foo | Add-Content -Path 'recipe_updated.txt'"}
        />
        <Content>
          To identify commands that retrieve the contents of a file and store them to a variable, we can run the following:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ cat powershell.evtx.log | egrep "^\\$" | grep "Get-Content"
$foo = Get-Content .\Recipe| % {$_ -replace 'honey', 'fish oil'}
$foo = Get-Content .\Recipe| % {$_-replace 'honey','fish oil'}
$foo = Get-Content .\Recipe| % {$_-replace 'honey','fish oil'}
$foo = Get-Content .\Recipe| % {$_-replace 'honey','fish oil'} $foo | Add-Content -Path 'recipe_updated.txt'
$foo = Get-Content .\Recipe| % {$_ -replace 'honey', 'fish oil'} $foo | Add-Content -Path 'recipe_updated.txt'`
          }
        </StyledSyntaxHighligher>
        <Content>
          Our answer is the last entry.
        </Content>
        <QuestionAnswer
          question={"The attacker created a new file after modifying the original contents. Submit the full powershell line that was used to create a new file."}
          answer={"$foo | Add-Content -Path 'Recipe.txt"}
        />
        <Content>
          We can run the following to identify some options:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ cat powershell.evtx.log | grep "Add-Content" | grep -v ParameterBinding | grep -v Information | grep -v Command
$foo | Add-Content -Path 'Recipe'
$foo | Add-Content -Path 'Recipe.txt'
$foo | Add-Content -Path 'Recipe.txt'
$foo | Add-Content -Path 'Recipe.txt'
$foo | Add-Content -Path 'recipe_updated.txt'
$foo = Get-Content .\\Recipe| % {$_-replace 'honey','fish oil'} $foo | Add-Content -Path 'recipe_updated.txt'
$foo = Get-Content .\\Recipe| % {$_ -replace 'honey', 'fish oil'} $foo | Add-Content -Path 'recipe_updated.txt'`
          }
        </StyledSyntaxHighligher>
        <Content>
          And our answer is <IC>$foo | Add-Content -Path 'Recipe.txt'</IC>
        </Content>
        <QuestionAnswer
          question={"What was the original file's name?"}
          answer={"recipe_updated.txt"}
        />
        <Content>
          We can reference back to our previous output for this answer.
        </Content>
        <QuestionAnswer
          question={"What is the new file's name?"}
          answer={"Recipe.txt"}
        />
        <Content>
          Similiarly, we can reason that the answer is <IC>Recipe.txt</IC>
        </Content>
        <QuestionAnswer
          question={"Were any files deleted (Yes/No)?"}
          answer={"Yes"}
        />
        <Content>
          We can run the following command to help answer this one:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ cat powershell.evtx.log | grep "Remove-Item"
Information     12/24/2022 6:05:51 AM   Microsoft-Windows-PowerShell    4103    Executing Pipeline      "CommandInvocation(Remove-Item): ""Remove-Item""
ParameterBinding(Remove-Item): name=""Path""; value="".\\recipe_updated.txt""
        Command Name = Remove-Item
Information     12/24/2022 6:05:42 AM   Microsoft-Windows-PowerShell    4103    Executing Pipeline      "CommandInvocation(Remove-Item): ""Remove-Item""
ParameterBinding(Remove-Item): name=""Path""; value="".\\Recipe.txt""
        Command Name = Remove-Item`
          }
        </StyledSyntaxHighligher>
        <Content>
          Reviewing the output reveals that there were some calls to <IC>Remove-Item</IC>.
        </Content>
        <QuestionAnswer
          question={"Was the original file deleted (Yes/No)?"}
          answer={"Yes"}
        />
        <Content>
          We can see in the previous output that <IC>recipe_updated.txt</IC> was one of the files targeted
          with <IC>Remove-Item</IC>.
        </Content>
        <QuestionAnswer
          question={"What Event Id number alerted when files were deleted?"}
          answer={"4104"}
        />
        <Content>
          By expanding our grep output using <IC>-A20</IC> and <IC>-B20</IC> flags, we can see messages on either side
          of our <IC>Remove-Item</IC> commands,
          and our answer that event id <IC>4104</IC> for <Pop>Execute a Remote Command</Pop> was alerted.
        </Content>
        <QuestionAnswer
          question={"Is the secret ingredient compromised (Yes/No)?"}
          answer={"Yes"}
        />
        <Content>
          By grepping for <IC>secret</IC> we see some interesting results:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ cat powershell.evtx.log | grep "secret"
ParameterBinding(Out-Default): name=""InputObject""; value=""1/2 tsp honey (secret ingredient)""
ParameterBinding(Out-Default): name=""InputObject""; value=""1/2 tsp fish oil (secret ingredient)""`
          }
        </StyledSyntaxHighligher>
        <Content>
          And if we recall back, we saw some commands that were replacing the word <IC>honey</IC> with <IC>fish oil</IC>.
          Therefore our answer is <Pop>Yes</Pop>, and our answer for the overall challenge is <IC>1/2 tsp honey</IC>.
        </Content>
        <Content>
          Here's what <Pop>Dusty Giftwrap</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.dusty_giftwrap}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default WindowsEventLogs
