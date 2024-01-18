import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import QuestionAnswer from "../QuestionAnswer";
function WiresharkPractice() {
  return (
    <Accordion>
      <ChallengeSummary title={"Wireshark Practice"} difficulty={1}/>
      <AccordionDetails>
        <ChallengeDetails>
          Use the Wireshark Phishing terminal in the Tolkien Ring to solve the mysteries around the suspicious PCAP. Get hints for this challenge by typing hint in the upper panel of the terminal.
        </ChallengeDetails>
        <Content>
          We begin our journey in the <Pop>Tolkien Ring</Pop> by running into <Pop>Sparkle Redberry</Pop> who has
          this to say:
        </Content>
        <QuoteCard
          character={characters.sparkle_redberry}
          quote={0}
        />
        <Content>
          There is a nearby challenge terminal called <Pop>Wireshark Phishing</Pop>. Logging into the terminal, we
          are prompted with several questions that we must determine the answers to by analyzing the provided pcap
          in <Pop>Wireshark</Pop>:
        </Content>
        <QuestionAnswer
          question={"There are objects in the PCAP file that can be exported by Wireshark and/or Tshark. What type of objects can be exported from this PCAP?"}
          answer={"HTTP"}
        />
        <Content>
          After loading up the pcap, we can identify what objects are exportable by selecting <Pop>{"File -> Export Objects"}</Pop>, and then selecting each option.
          After checking each option, we can see that <Pop>HTTP</Pop> is the only option with objects that can be exported.
        </Content>
        <QuestionAnswer
          question={"What is the file name of the largest file we can export?"}
          answer={"app.php"}
        />
        <Content>
          Taking a look at the <Pop>HTTP</Pop> exports prompt, we can see that the answer is <Pop>app.php</Pop>:
        </Content>
        <ContentImage src={"images/wireshark_export.png"}/>
        <QuestionAnswer
          question={"What packet number starts that app.php file?"}
          answer={"687"}
        />
        <Content>
          We can see in the above that the <IC>808kb</IC> <Pop>app.php</Pop> starts at packet <IC>687</IC>
        </Content>
        <QuestionAnswer
          question={"What is the IP of the Apache server?"}
          answer={"192.185.57.242"}
        />
        <Content>
          By selecting <Pop>app.php</Pop> in the export prompt, we are taken to packet <IC>687</IC> in the main <Pop>Wireshark</Pop> window
          where we can see that the source IP serving up the file is <Pop>192.185.57.242</Pop>.
        </Content>
        <QuestionAnswer
          question={"What file is saved to the infected host?"}
          answer={"Ref_Sept24-2020.zip"}
        />
        <Content>
          We can find the above answer by saving <Pop>app.php</Pop> and inspecting the contents, where we find
          this line: <IC>saveAs(blob1, 'Ref_Sept24-2020.zip');</IC>.
        </Content>
        <QuestionAnswer
          question={"Attackers used bad TLS certificates in this traffic. Which countries were they registered to? Submit the names of the countries in alphabetical order separated by a commas (Ex: Norway, South Korea)."}
          answer={"Israel, South Sudan, United States"}
        />
        <Content>
          First, we can filter the pcap by <Pop>TLS</Pop> server certificates received:
          <ContentImage src={"images/wireshark_pcap.png"}/>
          For each Certificate entry, we need to find the <Pop>RDNSequence</Pop> which reveals
          the <Pop>CountryName</Pop> property:
          <ContentImage src={"images/wireshark_cert.png"}/>
          If we comb through each certificate, we find our answer of <Pop>Israel, South Sudan, United States</Pop>.
        </Content>
        <QuestionAnswer
          question={"Is the host infected (Yes/No)?"}
          answer={"Yes"}
        />
        <Content>
          This completes the challenge, and here's what <Pop>Sparkle Redberry</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.sparkle_redberry}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default WiresharkPractice
