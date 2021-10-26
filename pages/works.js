import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, GridItem } from '../components/grid-item'

import thumbMetaphor from '../public/images/metaphor.png'
import thumbDrakensang from '../public/images/works/drakensang.jpg'
import thumbServer from '../public/images/works/server.png'
import thumbClient from '../public/images/works/client.png'
import thumbScripts from '../public/images/works/scripts.png'
import thumbImagetoASCII from '../public/images/works/imageconverter.jpg'
import thumbPortScanner from '../public/images/works/portscanner.jpg'
import thumbCaesar from '../public/images/works/caesar.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="metaphor" title="Metaphor" thumbnail={thumbMetaphor}>
          An open-source antivirus written in C#
          </WorkGridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/Wtf-Is-This-x1337/Drakensang_Injector"
            title="Drakensang Injector"
            thumbnail={thumbDrakensang}
          >
            Windows dynamic-link library injection tool written in C++
          </GridItem>
        </Section>

          <GridItem
            href="https://github.com/Wtf-Is-This-x1337/ChatServer"
            title="Chat Server"
            thumbnail={thumbServer}
          >
            A server in C++ that echos the client's messages back. It allows multiple clients to connect using the fd_set structure, the select() function and three macros: FD_CLR, FD_SET and FD_ZERO
          </GridItem>
          <GridItem
            href="https://github.com/Wtf-Is-This-x1337/ChatClient"
            title="Chat Client"
            thumbnail={thumbClient}
          >
            C# WinForms application to talk to a multi-chat server
          </GridItem>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <GridItem
            href="https://github.com/Wtf-Is-This-x1337/Useful-Scripts"
            thumbnail={thumbScripts}
            title="Useful Scripts"
          >
            Useful scripts for making developer's everyday life easier and happier
          </GridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <GridItem href="https://github.com/Wtf-Is-This-x1337/ETU-PortScanner" thumbnail={thumbPortScanner} title="ETU Port Scanner">
            Easy to use port scanner program written in Python 
          </GridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            href="https://github.com/Wtf-Is-This-x1337/Caesar-Cipher-Python"
            thumbnail={thumbCaesar}
            title="Caesar Cipher with python"
          >
            Tool to decrypt/encrypt/bruteforce with Caesar.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem href="https://github.com/Wtf-Is-This-x1337/Image-To-Ascii-Converter" thumbnail={thumbImagetoASCII} title="Image to ASCII converter">
            A cross-platform command-line tool to convert images into ascii art and print them on the console
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
