// Contact.tsx
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import HomeLayout from "@/Layout/Layout";
import emailjs from '@emailjs/browser';
import {
  ContactContainer,
  ContactDescription,
  ContactHeader,
  ContactLinks,
  ContactTextContainer,
  Github,
  LinkedIn,
  Twitter,
  FormContainer,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledButton,
  ContactSectionsContainer,
  LeftSection,
  RightSection,
  ErrorMessage,
  SuccessMessage,
} from "@/styles/Contact";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ error: "", success: "" });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ error: "", success: "" });

    try {
      await emailjs.sendForm(
        'service_8z5f559',  
        'template_z1bkhuj', 
        form.current || '',
        'bDz8NCcvFhjo0DxjU' 
      );

      setStatus({ error: "", success: "Message sent successfully!" });
      form.current && form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      setStatus({ error: "Failed to send message. Please try again.", success: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactHeader>CONTACT</ContactHeader>
      <ContactSectionsContainer>
        <LeftSection>
          <ContactTextContainer>
            <ContactDescription>
              I extend a warm welcome to all of you who have taken the time to
              explore my portfolio. Your interest in my work is greatly appreciated.
              I am always open to discussing potential collaboration opportunities.
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
                  href="https://github.com/ngunjez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github></Github>
                </Link>
                <Link
                  href="https://twitter.com/Ngunjiri29"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter></Twitter>
                </Link>
              </ContactLinks>
            </Fade>
          </ContactTextContainer>
        </LeftSection>
        <RightSection>
          <FormContainer>
            <StyledForm ref={form} onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <StyledInput
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <StyledTextarea
                name="message"
                placeholder="Your Message"
                required
              />
              {status.error && <ErrorMessage>{status.error}</ErrorMessage>}
              {status.success && <SuccessMessage>{status.success}</SuccessMessage>}
              <StyledButton 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </StyledButton>
            </StyledForm>
          </FormContainer>
        </RightSection>
      </ContactSectionsContainer>
    </ContactContainer>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined) {
  return <HomeLayout>{page}</HomeLayout>;
};