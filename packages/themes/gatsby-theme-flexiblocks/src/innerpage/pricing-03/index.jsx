import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Pricing from '@solid-ui-blocks/Pricing/Block02'
import Testimonials from '@solid-ui-blocks/Testimonials/Block04'
import Faq from '@solid-ui-blocks/Faq/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const Pricing03 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='6' />
      <Pricing content={content['pricing']} />
      <Divider space='5' />
      <Container variant='narrow'>
        <Testimonials content={content['testimonials']} />
        <Divider space='5' />
        <Faq content={content['faq']} />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpagePricing03BlockContent {
    allBlockContent(
      filter: { page: { in: ["innerpage/pricing-03", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Pricing03
