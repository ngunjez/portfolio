import {
  ContactContainer,
  ContactDescription,
  ContactHeader,
  ContactLinks,
  ContactTextContainer,
  Email,
  Github,
  LinkedIn,
  Twiiter,
} from "@/styles/Contact";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTextContainer>
        <ContactHeader>Contact</ContactHeader>
        <ContactDescription>
          I extend a warm welcome to all of you who have taken the time to
          explore my portfolio. Your interest in my work is greatly appreciated.
          I am always open to discussing potential collaboration opportunities.
          If you find my work aligns with your interests and you're interested
          in exploring opportunities to work together, please don't hesitate to
          reach out. Feel free to contact me at your convenience, and I'll be
          happy to discuss how we can create something meaningful together.
        </ContactDescription>
        <ContactLinks>
            <Link href = ""
                  target="_blank"
                  rel="noopener noreferrer"
             >
                <Twiiter></Twiiter>
             </Link>
             <Link href = ""
                  target="_blank"
                  rel="noopener noreferrer"
             >
                <LinkedIn></LinkedIn>
             </Link>
             <Link href = ""
                  target="_blank"
                  rel="noopener noreferrer"
             >
                <Email></Email>
             </Link>
             <Link href = ""
                  target="_blank"
                  rel="noopener noreferrer"
             >
                <Github></Github>
             </Link>
        </ContactLinks>
      </ContactTextContainer>
    </ContactContainer>
  );
};

export default Contact;
