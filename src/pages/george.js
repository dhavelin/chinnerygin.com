import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"
import Fig from "../components/fig"
import Quote from "../components/quote"

export default () => (
  <Layout>
    <Helmet>
      <title>The artist George Chinnery</title>
    </Helmet>
    <article>
      <p className={styles.subtitle}>The Artist</p>
      <h1>George Chinnery</h1>
      <p>George Chinnery was born in London in 1774. He attended art school there, a contemporary of Turner’s. He became a portrait artist and moved to Dublin in 1796, lodging at 27, College Green, in the heart of the city.</p>
      <Fig src="/images/parliament.jpg" caption="View of College Green c. 1800 from outside Chinnery's door" />
      <p>In those days Ireland still had its own parliament (also in College Green), stacked with peers and wealthy members who spread money about and supported a thriving social scene. They enjoyed fine accommodations when living in town. Leinster House and Powerscourt House, for example, were both private residences at that time.</p>
      <p>These were the sort of people who would desire to have their likenesses captured in oils. Chinnery found himself much in demand.</p>
      <p>He married Marianne Vigne, the daughter of his landlord, and had two children.</p>
      <p>The 19th century, however, did not begin well for Dublin. The Act of Union saw Ireland absorbed into the United Kingdom and its parliament closed down. Gradually the great and the good decamped to London or to their country retreats. Chinnery decided to move on.</p>
      <p>In 1802, he took an East India Company ship to India, where he continued his vocation as an artist painting, among many others, the Duke of Wellington and a young William Thackeray.</p>
      <Quote citation="Patrick Conner, George Chinnery’s biographer.">Chinnery became the leading artist of British India in the early 1800s, esteemed equally for his artistic bravura and for his flamboyant personality.</Quote>
      <p>To escape his creditors, Chinnery shipped out again in 1825, this time to southern China, basing himself in Canton and Macau. This was the only part of China where the Emperor permitted trade with foreigners.</p>
      <Fig src="/images/selfportrait.jpg" caption="Self-Portrait, George Chinnery" />
      <p>Chinnery’s portraits of the European, American and Chinese traders, and his sketches of ordinary life, are hugely important in documenting that era. He was friends with William Jardine and James Matheson, who founded the great trading house of Jardine Matheson in 1832. He witnessed the Opium Wars, and the ceding of Hong Kong to the British in 1841, recording the earliest days of that colony. He appears as the character Aristotle Quance in James Clavell’s novel, <a href="https://en.wikipedia.org/wiki/Tai-Pan_(novel)">Tai-Pan</a>, set in 1842.</p>
      <p>George Chinnery died in 1852 and was buried in Macau.</p>
    </article>
  </Layout>
)