import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

import * as imagesStyles from "./Images.module.scss"

const Images = () => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      images: allSanityImages(sort: { fields: title, order: DESC }) {
        edges {
          node {
            title
            id
            slug {
              current
            }
            image {
              asset {
                url
                gatsbyImageData(height: 600, width: 600)
              }
            }
          }
        }
      }
    }
  `)
  const imageData = data.images.edges
  return (
    <div className={imagesStyles.imageContainer}>
      <h1>Gallery of Our Destinations</h1>
      <Box className={imagesStyles.imageGrid}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {imageData.map(item => (
            <ImageListItem key={item.node.id}>
              <img
                src={item.node.image.asset.url}
                alt={item.node.slug.current}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  )
}
export default Images
