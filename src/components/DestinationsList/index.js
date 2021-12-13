import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Grid } from "@mui/material"
import { ImLocation } from "react-icons/im"

import * as destinationsListStyles from "./DestinationsList.module.scss"
import { Button } from "../ButtonElement"

const DestinationsList = () => {
  const data = useStaticQuery(graphql`
    query DestinationListQuery {
      destinations: allSanityDestinations(
        sort: { order: ASC, fields: tripDate }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
            location
            image {
              asset {
                gatsbyImageData
                url
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
      <Container maxWidth="lg">
        <Grid container>
          {destinationsData.map(item => (
            <Grid
              item
              xs={12}
              key={item.node.id}
              className={destinationsListStyles.destinationsGrid}
            >
              <Link to={`/destinations/${item.node.slug.current}`}>
                <GatsbyImage
                  image={getImage(item.node.image.asset)}
                  alt={item.node.location}
                  className={destinationsListStyles.destinationsImg}
                />
              </Link>
              <div>
                <ImLocation />
                <span className={destinationsListStyles.destinationsTitle}>
                  {item.node.location}
                </span>
              </div>
              <Link to={`/destinations/${item.node.slug.current}`}>
                <Button fontBig small primary>
                  View Destination
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default DestinationsList
