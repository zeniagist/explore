import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import * as heroStyles from "./Hero.module.scss"
import { Button } from "../ButtonElement"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      image: allSanityImages(filter: { title: { eq: "background" } }) {
        edges {
          node {
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
  const image = getImage(data.image.edges[0].node.image.asset)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      preserveStackingContext
      className={heroStyles.heroContainer}
    >
      <h1>Travel More</h1>
      <p>Plan your next trip today</p>
      <div className={heroStyles.heroBtns}>
        <Link to="/destinations">
          <Button fontBig big primary>
            Get Started
          </Button>
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default Hero
