import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, IC, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function PrisonEscape() {
  return (
    <Accordion>
      <ChallengeSummary title={"Prison Escape"} difficulty={3}/>
      <AccordionDetails>
        <ChallengeDetails>
          Escape from a container. Get hints for this challenge from Bow Ninecandle in the Elfen Ring. What hex string appears in the host file /home/jailer/.ssh/jail.key.priv?
        </ChallengeDetails>
        <Content>
          We next encounter <Pop>Tinsel Upatree</Pop> who has the following information to relay:
        </Content>
        <QuoteCard
          character={characters.tinsel_upatree}
          quote={0}
        />
        <Content>
          Loading up the terminal challenge, we are greeted with the following prompt:
        </Content>
        <TerminalPrompt>
          Greetings Noble Player,
          <br/><br/>
          You find yourself in a jail with a recently captured Dwarven Elf.
          <br/><br/>
          He desperately asks your help in escaping for he is on a quest to aid a friend in a search for treasure inside
          a crypto-mine.
          <br/><br/>
          If you can help him break free of his containment, he claims you would receive "MUCH GLORY!"
          <br/><br/>
          Please, do your best to un-contain yourself and find the keys to both of your freedom.
        </TerminalPrompt>
        <Content>
          Let's see if we have any elevated privileges:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `grinchum-land:~$ sudo -l
User samways may run the following commands on grinchum-land:
    (ALL) NOPASSWD: ALL`
          }
        </StyledSyntaxHighligher>
        <Content>
          Well that's convenient - we can run any command with <Pop>sudo</Pop>! Let's take a look at <IC>fdisk</IC> to see if we
          can leverage any partitions:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `grinchum-land:~$ sudo fdisk -l
Disk /dev/vda: 2048 MB, 2147483648 bytes, 4194304 sectors
2048 cylinders, 64 heads, 32 sectors/track
Units: sectors of 1 * 512 = 512 bytes`
          }
        </StyledSyntaxHighligher>
        <Content>
          We can attempt to mount this partition using the <IC>mount</IC> utility:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `grinchum-land:~$ sudo mkdir -p /mnt/rootdisk
grinchum-land:~$ sudo mount /dev/vda /mnt/rootdisk`
          }
        </StyledSyntaxHighligher>
        <Content>
          With the partition now mounted at <IC>/mnt/rootdisk</IC>, we can explore its contents. If we navigate
          to <IC>/home</IC> directory, we see a user <Pop>jailer</Pop> exists, and within <Pop>jailer</Pop>'s home
          directory, we see a <IC>.ssh</IC> directory. If we <IC>cat jail.key.priv</IC> we get the solution:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `grinchum-land:/mnt/rootdisk/home/jailer/.ssh$ cat jail.key.priv 

                Congratulations! 

          You've found the secret for the 
          HHC22 container escape challenge!

                     .--._..--.
              ___   ( _'-_  -_.'
          _.-'   \`-._|  - :- |
      _.-'           \`--...__|
   .-'                       '--..___
  / \`._                              \\
   \`. \`._               one           |
     \`. \`._                           /
       '. \`._    :__________....-----'
         \`..\`---'    |-_  _- |___...----..._
                     |_....--'             \`.\`.
               _...--'                       \`.\`.
          _..-'                             _.'.'
       .-'             step                _.'.'
       |                               _.'.'
       |                   __....------'-'
       |     __...------''' _|
       '--'''        |-  - _ |
               _.-''''''''''''''''''-._
            _.'                        |\\
          .'                         _.' |
          \`._          closer           |:.'
            \`._                     _.' |
               \`..__                 |  |
                    \`---.._.--.    _|  |
                     | _   - | \`-.._|_.'
          .--...__   |   -  _|
         .'_      \`--.....__ |
        .'_                 \`--..__
       .'_                         \`.
      .'_    082bb339ec19de4935867   \`-.
      \`--..____                        _\`.
               \`\`\`--...____          _..--'
                     | - _ \`\`\`---.._.'
                     |   - _ |
                     |_ -  - |
                     |   - _ |
                     | -_  -_|
                     |   - _ |
                     |   - _ |
                     | -_  -_|`
          }
        </StyledSyntaxHighligher>
        <Content>
          Upon completion, here's what <Pop>Tinsel Upatree</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.tinsel_upatree}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default PrisonEscape
