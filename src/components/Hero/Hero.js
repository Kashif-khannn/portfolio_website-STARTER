import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to showcase my Software Development
        Skills.
      </SectionText>
      <Button onClick onClick={() => (window.location = "http://google.com")}>
        {" "}
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
