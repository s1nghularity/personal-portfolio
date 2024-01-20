import React from 'react';
import { Container, Grid } from '@mui/material';
import SkillSlide from './SkillSlide.js';

export default function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <SkillSlide
              title="Journalism and Storytelling"
              companyLogos={[
                "/assets/img/companies/sis.jpg",
                "/assets/img/companies/sfbay.png",
                "/assets/img/companies/sfbt.jpeg",
                "/assets/img/companies/ndtv.png",
              ]}
              contributions={[
                "Researched/drafted security briefings for PayPal executives at SECURITY INDUSTRY SPECIALISTS.",
                "Collaborated with a remote news desk to identify significant stories for SFBAY.CA.",
                "Wrote profile pieces on local businesses for SAN FRANCISCO BUSINESS TIMES.",
                "Managed live ticker and breaking news flashes at NEW DELHI TELEVISION 24X7.",
              ]}
              tools={[
                "/assets/img/tools/icon-cision.png",
                "/assets/img/tools/icon-lexisnexis.png",
                "/assets/img/tools/icon-avid.png",
              ]}
            />
          </Grid>
          {/* Repeat for other skill slides */}
        </Grid>
      </Container>
    </section>
  );
}
