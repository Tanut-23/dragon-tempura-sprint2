import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ProductCard({elevation, image, title, artist, price}) {
  return (
    <Card elevation={elevation} sx={{ minWidth: 300, width: 320, height: 460, color: 'primary.chocolate', borderRadius: 2, overflow: 'visible' }}>
      <CardActionArea>
        <CardMedia sx={{ height: 330, borderRadius: 2 }} image={image} title="auction" />
        <CardContent>
          <Typography sx={{fontSize:'1.4rem', fontWeight: 600}}>
            {title}
          </Typography>
          <Typography gutterBottom sx={{ fontSize:'1.1rem' }}>
            {artist}
          </Typography>
          <Typography sx={{ fontSize:'1.35rem' }}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
