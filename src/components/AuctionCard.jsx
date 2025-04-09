import { Typography ,Paper, Stack, Card, CardActionArea, CardMedia, CardContent, Box } from '@mui/material'
import React from 'react'
import RemainingBlock from './RemainingBlock'


export default function AuctionCard({elevation, image, title, artist, price}) {
  return (
    <Card elevation={elevation} sx={{ minWidth: 300, width: 320, height: 530, color: 'primary.chocolate', borderRadius: 2, overflow: 'visible' }}>
      <CardActionArea sx={{position: 'relative'}}>
        <Box sx={{position: 'absolute', top: 10, left: 10, padding:1, borderRadius:1, backgroundColor: 'primary.chocolate', color: 'white', fontWeight: 700}}>LIVE</Box>
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
        <RemainingBlock day= {1} hour={2} min={22} sec={59}/>
      </CardActionArea>
    </Card>
  )
}
