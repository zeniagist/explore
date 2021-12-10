import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"

import * as destinationsListStyles from "./DestinationsList.module.scss"

const DestinationsList = () => {
  const data = useStaticQuery(graphql`
    query DestinationListQuery {
      destinations: allSanityDestinations(
        sort: { order: ASC, fields: tripDate }
      ) {
        edges {
          node {
            id
            location
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const destinationsData = data.destinations.edges
  return (
    <div className={destinationsListStyles.destinationsContainer}>
      <h1>Destinations</h1>
      <Paper square>
        <Container maxWidth="lg">
          <Grid container>
            {destinationsData.map(item => (
              <Grid item xs={12} key={item.node.id}>
                <Card square>
                  <GatsbyImage
                    image={getImage(item.node.image.asset)}
                    alt={item.node.location}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    </div>
  )
}

export default DestinationsList
