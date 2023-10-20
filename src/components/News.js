'use client'

import React, { useEffect, useState } from 'react'
import { Stack, Text, Button, Container, ChakraProvider, CSSReset, Box, Heading, Center, Image, Avatar, useColorModeValue, Link, Card, CardBody, CardFooter } from '@chakra-ui/react'
// import { Card } from 'react-bootstrap'

const NewsCard = ({ title, description, image, author, url }) => {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" rounded="lg" direction={{ base: 'column', md: 'row' }} alignItems="center" overflow='hidden'>
      <Stack flex="7" direction="column" alignItems="flex-start" spacing="4" maxW={{ base: '100%', md: '70%' }}>

        <Box>
          <Heading size='md' fontWeight="semibold">{title}</Heading>
          <Text>by {author}</Text>
        </Box>
        <Text fontSize="sm" textAlign="left" maxW="4xl">
          {description}
        </Text>

        <Link href={url} isExternal>
          <Button variant="outline" colorScheme="blue">
            Read More
          </Button>
        </Link>

      </Stack>

      {/* <Image flex="3" w="50px" h="100px" src={image} alt="News Article" rounded="lg" /> */}
      <Image flex="3" boxSize='180px' src={image} alt="News Article" rounded="lg" />
    </Stack>

  )
}

export default function News() {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [newsArticles, setNewsArticles] = useState([]);
  const fetchNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    setNewsArticles(data.articles)
  }
  useEffect(() => {
    fetchNews();
  }, [])
  return (
    <ChakraProvider >
      <CSSReset />
      <Box p={3} m={5} pt={5}>
        <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
          <Heading m={3} lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text as={"span"} position={"relative"} _after={{ content: "''", width: "full", height: "30%", position: "absolute", bottom: 1, left: 0, bg: "blue.400", zIndex: -1, }}>
              News{" "}
            </Text>
          </Heading>

        </Stack>
        <Container maxW='5xl' centerContent>
          <Box padding='4' color='black' >
          {
              newsArticles.map((article) => (
                <NewsCard title={article.title} description={article.description} image={article.urlToImage} author={article.author} url={article.url} />
              ))
            }
          </Box>
        </Container>

      </Box>
    </ChakraProvider>
  )
}