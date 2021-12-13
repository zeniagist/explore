import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material"

import Layout from "../components/Layout/Layout"
import * as destinationStyles from "./destination.module.scss"
import { Button } from "../components/ButtonElement"

const DestinationTemplate = ({ data }) => {
  const { id, location, image, description, tripDate } = data.destination
  return (
    <Layout>
      <Container className={destinationStyles.container}>
        <Grid
          container
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className={destinationStyles.header}
        >
          <Grid item>
            <h1>{location}</h1>
            <h3>Date of Trip: {tripDate}</h3>
          </Grid>
          <Grid item>
            <Link to="/destinations">
              <Button fontBig small primary>
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Card square className={destinationStyles.card}>
          <CardActionArea>
            <CardMedia>
              <GatsbyImage
                image={getImage(image.asset)}
                alt={location}
                className={destinationStyles.image}
              />
            </CardMedia>
            <CardContent>
              <Typography>
                {description.map(content => (
                  <p key={content.children[0]._key}>
                    {content.children[0].text}
                  </p>
                ))}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Layout>
  )
}

export default DestinationTemplate

export const data = graphql`
  query DestinationQuery($slug: String) {
    destination: sanityDestinations(slug: { current: { eq: $slug } }) {
      id
      location
      image {
        asset {
          url
          gatsbyImageData
        }
      }
      description {
        children {
          _key
          text
        }
      }
      tripDate(formatString: "MMMM DD YYYY")
    }
  }
`
