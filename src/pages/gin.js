import React from "react"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"
import Img from "gatsby-image"

export default ({data}) => (
  <Layout>
    <article>
      <p className={styles.subtitle}>The Gin</p>
      <h1>Chinnery Gin</h1>
      <p>With Chinnery Gin, we wanted to capture some of the romance of the Old China Trade. In the early 19th Century, all trade with Imperial China was conducted at the southern port of Canton, by order of the emperor. Among the main commodities purchased there were silk, porcelain, tea and cassia.</p>
      <nav className={styles.page}>
        <a href="#botanicals">Botanicals</a> <a href="#distillation">Distillation</a> <a href="#tasting">Tasting notes</a>
      </nav>
      <h2 id="a-name-botanicals-a-botanicals"><a name="botanicals">Botanicals</a></h2>
      <p>We searched the wholesale tea market at Canton for a very particular variety of oolong tea and combined it with cassia bark (sometimes known as Chinese cinnamon and often used in place of cinnamon) and osmanthus, a  flower with a wonderfully sweet fragrance that is redolent of the very streets of Canton.</p>
      <p>The full recipe for Chinnery Gin incorporates ten botanicals:</p>
    </article>

      <div className={styles.botanicals}>
        <figure>
          <figcaption>Osmanthus Flower</figcaption>
          <Img fixed={data.osmanthus.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Oolong Tea</figcaption>
          <Img fixed={data.oolong.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Cassia Bark</figcaption>
          <Img fixed={data.cassia.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Juniper</figcaption>
          <Img fixed={data.juniper.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Coriander Seed</figcaption>
          <Img fixed={data.coriander.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Liquorice Root</figcaption>
          <Img fixed={data.liquorice.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Sweet Orange Peel</figcaption>
          <Img fixed={data.orange.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Grains of Paradise</figcaption>
          <Img fixed={data.grainsofparadise.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Angelica Root</figcaption>
          <Img fixed={data.angelica.childImageSharp.fixed} />
        </figure>
        <figure>
          <figcaption>Orris Root</figcaption>
          <Img fixed={data.orris.childImageSharp.fixed} />
        </figure>
      </div>
    <article>

      <h2 id="a-name-distillation-a-distillation"><a name="distillation"></a>Distillation</h2>

      <p>Most good gins begin by infusing a batch of botanicals in a large pot of neutral alcohol for up to a day. The pot is then heated above 78°C so that the alcohol turns to vapour. The vapour is condensed and collected as a clear spirit which carries just the essence of the original botanicals.</p>

      <p>The first and last portions (“heads” and “tails”) of the distilled spirit are typically discarded as they contain either unwanted flavours or heavy oils that will turn the gin cloudy in the bottle.</p>

      <p>We also distill in this manner, but only with 8 of our 10 botanicals. The other two - osmanthus and oolong - we infuse and distill individually. That allows us to control precisely which portion of the distillate we keep for the best flavour.</p>

      <p>We are also distilling these two botanicals under a high vacuum, which lowers the temperature at which alcohol vaporises. Thus we can avoid cooking or even burning the botanicals, and can extract more delicate and natural flavours than would be possible using the conventional method.</p>

      <h2 id="a-name-tasting-a-tasting-notes"><a name="tasting"></a>Tasting notes</h2>

      <p className={styles.byline}>by Rachel Lindsay</p>

      <p><strong>Nose</strong><br />Very floral, leading into hedgerow notes of honeysuckle, wild herbs, cleavers and bramble. Warm fruit, sun-ripened strawberries and rhubarb, petals crushed underfoot and honey. Botanical notes of juniper and coriander, light, clean and summery, like lazy hazy summer evenings, decadent, aromatic and exotic. There is a lovely note of gooseberries with orange zest.</p>

      <p><strong>Palate</strong><br />Rich, creamy and zingy on the palate. Warming and mouth watering, juicy summer fruits and fresh herbal notes coming through. Sweet spicy flavours of clove and cardamon, floral like a sunny wall garden, quite heady, wallflowers and stewed fruits, jam, buttery lemon slices. Really floral, like a fruity summer jelly, or Turkish Delight.</p>

      <p><strong>Finish</strong><br />Crisp, clean and green on the finish, almost Mediterranean, a hint of olives. Very satisfying.</p>

    </article>
  </Layout>
)

export const query = graphql`
  query {
    osmanthus: file(relativePath: { eq: "botanicals/osmanthus.jpg" }) {
      ...botanicalImage
    }

    oolong: file(relativePath: { eq: "botanicals/oolong.jpg" }) {
      ...botanicalImage
    }

    cassia: file(relativePath: { eq: "botanicals/cassia.jpg" }) {
      ...botanicalImage
    }

    juniper: file(relativePath: { eq: "botanicals/juniper.jpg" }) {
      ...botanicalImage
    }

    coriander: file(relativePath: { eq: "botanicals/coriander.jpg" }) {
      ...botanicalImage
    }

    liquorice: file(relativePath: { eq: "botanicals/liquorice.jpg" }) {
      ...botanicalImage
    }

    grainsofparadise: file(relativePath: { eq: "botanicals/grainsofparadise.jpg" }) {
      ...botanicalImage
    }

    orange: file(relativePath: { eq: "botanicals/orange.jpg" }) {
      ...botanicalImage
    }

    angelica: file(relativePath: { eq: "botanicals/angelica.jpg" }) {
      ...botanicalImage
    }

    orris: file(relativePath: { eq: "botanicals/orris.jpg" }) {
      ...botanicalImage
    }
  }
`

export const botanicalImage = graphql`
  fragment botanicalImage on File {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`