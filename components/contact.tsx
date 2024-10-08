import {
  ContactContainer,
  ContactDescription,
  ContactHeader,
  ContactLinks,
  ContactTextContainer,
  Email,
  Github,
  LinkedIn,
  Twitter,
} from "@/styles/Contact";
import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import HomeLayout from "@/Layout/Layout";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTextContainer>
        <ContactHeader>CONTACT</ContactHeader>
        <ContactDescription>
          I extend a warm welcome to all of you who have taken the time to
          explore my portfolio. Your interest in my work is greatly appreciated.
          I am always open to discussing potential collaboration opportunities.
          If you find my work aligns with your interests and you&rsquo;re
          interested in exploring opportunities to work together, please
          don&rsquo;t hesitate to reach out. Feel free to contact me at your
          convenience, and I&rsquo;ll be happy to discuss how we can create
          something meaningful together.
        </ContactDescription>
        <Fade direction="up" triggerOnce>
          <ContactLinks>
            <Link
              href="https://www.linkedin.com/in/owen-ngunjiri-b19a7324a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn></LinkedIn>
            </Link>
            <Link
              href="https://twitter.com/Ngunjiri29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter></Twitter>
            </Link>

            <Link
              href="mailto:owen2ngunjiri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email></Email>
            </Link>
            <Link
              href="https://github.com/ngunjez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github></Github>
            </Link>
          </ContactLinks>
        </Fade>
      </ContactTextContainer>
    </ContactContainer>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
