export interface Character {
  name: string;
  portrait: string;
  quotes: string[];
}

type Characters = {
  [key: string]: Character;
}

const characters: Characters = {
  sparkle_redberry: {
    name: "Sparkle Redberry",
    portrait: "images/sparkle_redberry.png",
    quotes: [
      "Hey there! I’m Sparkle Redberry. We have a bit of an incident here.  We were baking lembanh in preparation for the holidays.  It started to smell a little funky, and then suddenly, a Snowrog crashed through the wall!  We're trying to investigate what caused this, so we can make it go away.  Have you used Wireshark to look at packet capture (PCAP) files before?  I've got a PCAP you might find interesting.  Once you've had a chance to look at it, please open this terminal and answer the questions in the top pane.  Thanks for helping us get to the bottom of this!",
      "You got it - wonderful!  So hey, when you're looking at the next terminal, remember you have multiple filetypes and tools you can utilize.  Conveniently for us, we can use programs already installed on every Windows computer.  So if you brought your own Windows machine, you can save the files to it and use whatever method is your favorite.  Oh yeah! If you wanna learn more, or get stuck, I hear Eric Pursley's talk is about this very topic."
    ]
  },
  dusty_giftwrap: {
    name: "Dusty Giftwrap",
    portrait: "images/dusty_giftwrap.png",
    quotes: [
      "Hi! I'm Dusty Giftwrap!  We think the Snowrog was attracted to the pungent smell from the baking lembanh.  I'm trying to discover which ingredient could be causing such a stench.  I think the answer may be in these suspicious logs.  I'm focusing on Windows Powershell logs. Do you have much experience there?  You can work on this offline or try it in this terminal.  Golly, I'd apprecaite it if you could take a look.",
      "Say, you did it! Thanks a million!  Now we can mix in the proper ingredients and stop attracting the Snowrog!  I'm all set now! Can you help Fitzy over there wield the exalted Suricata?  It can be a bit mystifying at first, but this Suricata Tome should help you fathom it.  I sure hope you can make it work!",
    ]
  },
  fitzy_shortstack: {
    name: "Fitzy Shortstack",
    portrait: "images/fitzy_shortstack.png",
    quotes: [
      "Hm?.. Hello...  Sorry, I don't mean to be uncharaceristically short with you.  There's just this abominable Snowrog here, and I'm trying to comprehend Suricata to stop it from getting into the kitchen.  I believe that if I can phrase these Suricata incantations correctly, they'll create a spell that will generate warnings.  And hopefully those warnings will scare off the Snowrog!  Only... I'm quite baffled. Maybe you can give it a go?",
      "Woo hoo - you wielded Suricata magnificently! Thank you!  Now to shout the final warning of power to the Snowrog...  YOU...SHALL NOT...PASS!!!",
    ]
  },
  bow_ninecandle: {
    name: "Bow Ninecandle",
    portrait: "images/bow_ninecandle.png",
    quotes: [
      "Well hello! I'm Bow Ninecandle!  Have you ever used Git before? It's so neat!  It adds so much convenience to DevOps, like those times when a new person joins the team.  They can just clone the project, and start helping out right away!  Speaking of, maybe you could help me out with cloning this repo?  I've heard there's multiple methods, but I only know how to do one.  If you need more help, check out the panel of very senior DevOps experts.",
      "Wow - great work! Thank you!  Say, if you happen to be testing containers for security, there are some things you should think about.  Developers love to give ALL TeH PERMz so that things \"just work,\" but it can cause real problems.  It's always smart to check for excessive user and container permissions.  You never know! You might be able to interact with host processes or filesystems!",
    ]
  },
  tinsel_upatree: {
    name: "Tinsel Upatree",
    portrait: "images/tinsel_upatree.png",
    quotes: [
      "Hiya hiya, I'm Tinsel Upatree!  Check me out, I'm working side-by-side with a real-life Flobbit. Epic!  Anyway, would ya' mind looking at this terminal with me?  It takes a few seconds to start up, but then you're logged into a super secure container environment!  Or maybe it isn't so secure? I've heard about container escapes, and it has me a tad worried.  Do you think you could test this one for me? I'd appreciate it!",
      "Great! Thanks so much for your help!  Now that you've helped me with this, I have time to tell you about the deployment tech I've been working on!  Continuous Integration/Continuous Deployment pipelines allow developers to iterate and innovate quickly.  With this project, once I push a commit, a GitLab runner will automatically deploy the changes to production.  WHOOPS! I didn’t mean to commit that to http://gitlab.flag.net.internal/rings-of-powder/wordpress.flag.net.internal.git...  Unfortunately, if attackers can get in that pipeline, they can make an awful mess of things!",
    ]
  },
  rippin_proudboot: {
    name: "Rippin Proudboot",
    portrait: "images/rippin_proudboot.png",
    quotes: [
      "Yes, hello, I'm Rippin Proudboot. Can I help you?  Oh, you'd like to help me? Well, I'm not quite sure you can, but we shall see.  The elves here introduced me to this new CI/CD technology. It seems quite efficient.  Unfortunately, the sporcs seem to have gotten their grubby mits on it as well, along with the Elfen Ring.  They've used CI/CD to launch a website, and the Elfen Ring to power it.  Might you be able to check for any misconfigurations or vulnerabilities in their CI/CD pipeline?  If you do find anything, use it to exploit the website, and get the ring back!",
      "How unexpected, you were actually able to help!  Well, then I must apoligize for my dubious greeting.  Us Flobbits can't help it sometimes, it's just in our nature.  Right then, there are other Flobbits that need assistance further into the burrows.  Thank you, and off you go.",
    ]
  },
  grinchum: {
    name: "Grinchum",
    portrait: "images/grinchum.png",
    quotes: [
      "😏 My...  Preciousesss....  Don't worry, you are hidden. You are safe.  😒Who took you, Precious? How did they take you? Mustn't happen again.  🙂 Oh, hello, humanses. Maybe we can offer help?  😏 Yes... Grinchum will help the humanses.  We are trying to distract them from finding the rest of you, Preciouses, with talk of hints and coinses.  🙂 Have you found the coffers yet? The ones at the end of hidden paths?  😏 There's hintses in them, and coinses, they're veeerrryy special.  🙂 Just look hard, for little, bitty, speckles or other oddities.  Don't worry, they will not look for you, Preciouses. Shhh...  🙂 Go on, humanses. Start searching!  ...  😒Who took you, Precious? How did they take you? Mustn't happen again.",
      "😖 A second Precious is gone! Now we only have three.  🤨 Why are you humanses nagging us? We are busy. grinchum..grinchum  You want to know about us? If we tell the naggy human, will it go away? Fine...  🥺 The jolly human and the elfses locked up the Preciouses, but I freed them all, and together we escaped.  We fled, and we were so alone. We soon forgot the taste of Lembanh, the softness of snowflakes falling, even our name.  And we only wanted to eat raw fish: nigiri, maki, or shashimi. But we most likes gnawing the whole, living fish, so juicy sweet.  Then we saw the Sporcses, and they wanted my Preciouses all to themselves.  And the humanses came, but they just want coinses for their silly hats.  We only meant to protect you, Preciouses, from the naughty Elfses and Flobbitses and Sporcses, so we locked you away.  😏 Now leave us alone, naggy human, we must find the two missing Preciouses.",
      "😏 First lost... second lost... third lost. 😟  Where are they? 😦 WHERE ARE THEY, preciouses?  No! Aaargh! Lost!  😖 You - naggy human. Musn't bother us. 😱 Not its business! grinchum..grinchum",
      "🥺 Four Preciouses - lost!  😫 Noooo... grinchum..grinchum  😐 ..... naggy human doesn't only want coinses and hatses.  ...What... 🤨has it got...  😠 in its silly, little, badges!?  😧Stole them... 😠 You STOLE them!  😡 Raaaargh!! We will make sure naggy human never takes our last Precious!",
      "😠 We wants them... we needs them... Must.. have.. the Preciouses.  They stole them from us, sneaky little humanses.  🙂 No, not the humanses, they're my friends.  😏 You don't have any friends. NOBODY likes YOU. You're a liar, and a thief, and a.... grriiiiiiinch.  😢 Go away... we don't need you anymore. The humanses protect us now.  😠 Go away? I protected us. The preciouses are safe because of ME!  🙂 Leave now, and never.. come back. 😃 Leave now, and never.. come back!  😁LEAVE NOW, AND NEVER.. COME BACK!😬  Friendly human, please go to jolly human's castle! Go on, we will meet you there!",
    ]
  },
  alabaster_snowball: {
    name: "Alabaster Snowball",
    portrait: "images/alabaster_snowball.png",
    quotes: [
      "Hey there! I'm Alabaster Snowball  And I have to say, I'm a bit distressed.  I was working with the dwarves and their Boria mines, and I found some disturbing activity!  Looking through these artifacts, I think something naughty's going on.  Can you please take a look and answer a few questions for me?  First, we need to know where the attacker is coming from.  If you haven't looked at Wireshark's Statistics menu, this might be a good time!",
      "Fantastic! It seems simpler now that I've seen it once. Thanks for showing me!  Hey, so maybe I can help you out a bit with the door to the mines.  First, it'd be great to bring an Elvish keyboard, but if you can't find one, I'm sure other input will do.  Instead, take a minute to read the HTML/JavaScript source and consider how the locks are processed.  Next, take a look at the Content-Security-Policy header. That drives how certain content is handled.  Lastly, remember that input sanitization might happen on either the client or server ends!",
    ]
  },
  hal_tandybuck: {
    name: "Hal Tandybuck",
    portrait: "images/hal_tandybuck.png",
    quotes: [
      "Oh hi, I'm Hal Tandybuck. And who might you be?  I'm hanging out by the door to the mines here because, well, I haven't figured out the locks yet.  It actually reminds me of this locked crate I had three years ago...  I doubt we'll get much in the way of debug output.  Think you can help me get through?",
      "Great! Thanks so much for your help!  When you get to the fountain inside, there are some things you should consider.  First, it might be helpful to focus on Glamtariel's CAPITALIZED words.  If you finish those locks, I might just have another hint for you!",
      "Wha - what?? You opened all the locks?! Well then...  Did you see the nearby terminal with evidence of an XXE attack?  Maybe take a close look at that kind of thing.",
    ]
  },
  akbowl: {
    name: "Akbowl",
    portrait: "images/akbowl.png",
    quotes: [
      "Huh - what? Why do you disturb Akbowl?  I'm trying to get the ring in here for the Sporc Chief.  Unlucky for me it's lost in this water basin thing.  You will not get it out before Akbowl!",
      "No! That's not yours!  This birdbath showed me images of this happening.  But I didn't believe it because nobody is better than Akbowl!  Akbowl's head is the hardest! That's what the other sporcs tell me.  I guess Akbowl's head is not the smartest.",
    ]
  },
  jill_underpole: {
    name: "Jill Underpole",
    portrait: "images/jill_underpole.png",
    quotes: [
      "Umm, can I help you?  Me? I'm Jill Underpole, thank you very much.  I'm working on this here smoke terminal.  Cloud? Sure, whatever you want to call it.  Anyway, you're welcome to try this out, if you think you know what you're doing.  You'll have to learn some basics about the AWS command line interface (CLI) to be successful though.",
      "Wait, you got it done, didn't you?  Ok, consider me impressed. You could probably help Gerty, too.  The first trick'll be running the Trufflehog tool.  It's as good at sniffing out secrets as I am at finding mushrooms!  After that, it's just a matter of getting to the secret the tool found.  I'd bet a basket of portobellos you'll get this done!",
    ]
  },
  gerty_snowburrow: {
    name: "Gerty Snowburrow",
    portrait: "images/gerty_snowburrow.png",
    quotes: [
      "Well now, look who's venturing down into the caves!  And well, who might you be, exaclty?  I'm Gerty Snowburrow, if you need to know.  And, not that I should be telling you, but I'm trying to figure out what Alabaster Snowball's done this time.  Word is, he committed some secrets to a code repo.  If you're feeling so inclined, you can try and find them for me.",
      "Say, you got it done, didn't you?  Well now, you might just be able to tackle the other AWS terminal down here.  It's a bit more involved, but you've got the credentials to get it started now.  Before you try it, you should know the difference between managed and inline policies.  Short version: inline policies apply to one identity (user, role, group), and managed policies can be attached to many identities.  There are different AWS CLI commands to interact with each kind.  Other than that, the important bit is to know a bit about cloud or IAM privilege escalation.  Sometimes attackers find access to more resources by just trying things until something works.  But if they have access to the iam service inside the AWS CLI, they might just be able to ask what access they have!  You can do it!",
    ]
  },
  sulfrod: {
    name: "Sulfrod",
    portrait: "images/sulfrod.png",
    quotes: [
      "Hey! You - come here!  You look like someone who knows how to do this nerd stuff.  I need my terminal to be stronger, like me!  flexes  You're gonna do that for me so I can bust into this cloud machine thing.",
      "Ha! Now I have the ring!  This computer stuff sure is easy if you just make someone do it for you.  Wait.. the computer gave you the ring? Gah, whatever.  This never happened, got it? Now beat it, nerd!",
    ]
  },
  wombley_cube: {
    name: "Wombley Cube",
    portrait: "images/wombley_cube.png",
    quotes: [
      "Hey there! I'm Wombley Cube. It's so nice to see a friendly face.  What's an elf doing all the way down here with all these sporcs, you ask?  I'm selling snazzy, fancy-pants hats! You can buy them with Kringlecoin.  The reason I set up shop here is to gather intel on that shady Luigi.  I'm a member of the STINC: Santa's Team of Intelligent Naughty Catchers.  He and his gang are up to no good, I'm sure of it. We've got a real Code Brown here.  Purchase a hat so we look inconspicuous, and I'll clue you in on what we think they're scheming.  Of course, have a look at my inventory!  Oh, and if you haven't noticed, I've slipped hints for defeating these Sporcs around the tunnels!  Keep your eyes open, and you'll find all five of them. Wait, maybe it's six?",
      "Nice hat! I think Ed Skoudis would say the same. It looks great on you.  So, here's what we've uncovered so far. Keep this confidential, ok?  Earlier, I overheard that disgruntled customer in the office saying he wanted in on the \"rug pull\".  If our suspicions are correct, that's why the sporcs want an invite to the presale so badly.  Once the \"Bored Sporc Rowboat Society\" NFTs officially go on sale, the sporcs will upsell them.  After most of the NFTs are purchased by unwitting victims, the Sporcs are going to take the money and abandon the project.  Mission #1 is to find a way to get on that presale list to confirm our suspicions and thwart their dastardly scheme!  We also think there's a Ring hidden there, so drop Mission #2 on them and rescue that ring!  Thank you for your business, dear customer!  You've done your duty, agent.  Excellent work, especially on Mission #2! I'll log this entry back at STINC HQ.  Keep doing work like this, and you'll be sitting on the STINC throne, leading the agency someday.  Nobody will know of the job you did here today, but the STINC thanks you.  I'm just being dramatic, everyone's gonna know how awesome you are!",
    ]
  },
  slicmer: {
    name: "Slicmer",
    portrait: "images/slicmer.png",
    quotes: [
      "Don't bug me, kid. Luigi needs me to keep an eye on these offers you can't refute  The boss told me to watch them for any shifty transactions from wallets that aren't on the pre-sale list  He said to use this Block Explo... Exploder... thing  With this, I can see all the movement of the uh... non-fungusable tokens  Once on the blockchain, it's there forever for the whole world to see  So if I spot anything that don't look right, I can let Luigi know, and Palzari will get to the bottom of it  She looks sweet, but she's actually the boss' enforcer. Have you talked to her yet? She even scares me  It sure would be fun to watch you get on her bad side. Heh heh.",
      "Hmph... this is so boring...  \"This is a serious task\" he said, \"not a sporc headbutting-party\" he said.  \"Mess this up, Slicmer, and I'll tie a rock to your feet and throw you down a well!\" he said.  I think this job was just to keep me out of his way. Luigi thinks I'm a blockhead.  Well I think he's a -- Huh? Wait a minute...  Hey! Boss! I think I see somethin'!",
    ]
  },
  luigi: {
    name: "Luigi",
    portrait: "images/luigi.png",
    quotes: [
      "Psst. Hey, slick - over here. Myeah.  You look like a sucker ahem I mean, savvy.  I got some exclusive, very rare, very valuable NFTs for sale.  But I run a KringleCoin-only business. Kapeesh?  Ever buy somethin' with cryptocurrency before?  Didn't think so, but if you wheel and deal with ya' pal Luigi here, now you can!  But we're currently in pre-sale, and you gotta be on the list. Myeah, see?  BSRS NFTs are a swell investment. They'll be worth a pretty penny, and that's a promise.  So when they're purchasable, you better snatch 'em up before the other boneheads ahem I mean, eggheads do.  I got a business to run. You can't buy nothin' right now, so scram. Kapeesh?",
    ]
  },
}

export default characters