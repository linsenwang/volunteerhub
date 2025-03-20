import { Card, CardContent, CardActions, Button, Typography, Grid, Container } from "@mui/material";

export default function CardList({ cardData }) {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} container justifyContent="center">
            <Card sx={{ 
              maxWidth: 345, 
              p: 2, 
              boxShadow: 3,
              height: 210,
              }}>
              <CardContent sx={{ maxHeight: 120, overflowY: 'auto' }}>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                {Object.entries(card.details).map(([key, value]) => (
                  <Typography variant="body2" color="text.secondary" key={key}>
                    {value}
                  </Typography>
                ))}
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', marginTop: 2 }}>
                <Button size="small" variant="contained" href={card.url}>查看详情</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
