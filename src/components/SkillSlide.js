import React from 'react';
import { Card, Grid, Typography, CardMedia, CardContent } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)({
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: '140px',
  paddingTop: '56.25%', // 16:9
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'center',
});

export default function SkillSlide({ title, companyLogos, contributions, tools }) {
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Grid container spacing={2}>
          {companyLogos.map((logo, index) => (
            <Grid item xs={4} key={index}>
              <StyledCardMedia
                image={logo}
                title="Company Logo"
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {contributions.join(' ')}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}
