import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Metaphor Antivirus">
    <Container>
      <Title>
        Metaphor <Badge>2020-2021</Badge>
      </Title>
      <P>
        Metaphor is an open-source antivirus written in C#
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Wtf-Is-This-x1337/Metaphor-Antivirus/">
            Metaphor Antivirus<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>C# (BunifuUI), Yara Rules</span>
        </ListItem>
      </List>

      <WorkImage src="/images/metaphor.png" alt="Main" />
      <WorkImage src="/images/tools.png" alt="Tools" />
    </Container>
  </Layout>
)

export default Work
