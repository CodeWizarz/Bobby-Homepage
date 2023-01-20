import NextLink from "next/link"
import { Container, Heading, Box, Image, useColorModeValue, Link, Button } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection , BioYear } from "../components/bio"
import Layout from '../components/layouts/articel'


const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in India!

            </Box>
            <Box display={{md:'flex'}}>
<Box flexGrow={1}>
    <Heading as="h2" variant="page-title">
        Bobby
    </Heading>
    <p>Digital Craftsman ( Artist / Developer / Designer ) </p>


</Box>
            </Box>
            <Box 
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
                        >
                             <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/bobby.jpg" alt="Profile Image"
                            />
                            </Box>
                           
    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Work
        </Heading>
        <Paragraph> Balraj knows as Bobby is a freelance and a full-stack developer based in India with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his friends. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/Drop-Do"><Link>Drop-Do</Link></NextLink>
          .          
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                    My Portfolio
                </Button>
            </NextLink>
          </Box>


    </Section>
    <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
            Bio
        </Heading>
        <BioSection>
            <BioYear>2004</BioYear>
            Born In Bangalore, India.
        </BioSection>
        <BioSection>
            <BioYear>2020</BioYear>
            Completed My SSLC (Secondary School Leaving Certifictae)
        </BioSection>
        <BioSection>
            <BioYear>2023</BioYear>
            Going to Complete My Diploma in Mechatronics In Sri Jayachamarajendra polytechnic.
        </BioSection>
        <BioSection>
            <BioYear>2023</BioYear>
            Present Working as an Intern In Red Hill Softec Automation Company.
        </BioSection>
    </Section>

    <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
            I ❤️ 
        </Heading>
        <Paragraph>
            Art, Music,{' '}
            <Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMona_Lisa&psig=AOvVaw06erxp8L4qvHezAsyq_zEw&ust=1674290282966000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjtsL7f1fwCFQAAAAAdAAAAABAH">
                Drawing
            </Link>
            , Photography, Machine Learning
            <Link href="https://www.openai.com">
                , Artificial Intelligence
            </Link>


        </Paragraph>
    </Section>




        </Container>
        </Layout>
    )
}

export default Page