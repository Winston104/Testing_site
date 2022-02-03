import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link as ChakraLink,
  useBreakpoint,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import AboutTerminal from '@/components/AboutTerminal';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);
  const bp = useBreakpoint();
  return (
    <>
      <NextSeo title="Home" />

      <Box
        minH="100vh"
        height="full"
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW="7xl"
        mx="auto"
        pt={{ base: '28', sm: '14', md: '16', xl: '20' }}
      >
        {/* Im not actually too sure why this needs to be here, but without this additional flex
        the body doesn't begin at the top of the page... */}
        <Flex
          direction="column"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          height="full"
          width="full"
          p={{ base: 0, sm: 16 }}
        >
          <Flex
            direction={{ base: `column`, lg: `row` }}
            alignItems="center"
            mx="auto"
            my={{ xl: '16' }}
          >
            <Skeleton
              isLoaded={imageLoad}
              boxSize="250px"
              borderRadius="2xl"
              m="auto"
            >
              <Image
                flexGrow={3}
                borderRadius="2xl"
                boxSize="250px"
                src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/273146104_4869167276511232_2859202710331493039_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LWG2dtYvOXkAX8tYLGg&_nc_ht=scontent-ort2-1.xx&oh=00_AT9uMZikiEc2iXHVnt456gh5BEzSnY_72jpvTtEK5P9xGg&oe=61FFCA16"
                objectFit="cover"
                alt="Levi Cheney"
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
            <Flex
              alignSelf="center"
              direction="column"
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
              flexGrow={1}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`
                )}, ${useColorModeValue(
                  `teal.600`,
                  `teal.400`
                )}, ${useColorModeValue(`blue.600`, `blue.300`)})`}
                className="moving-grad"
                bgClip="text"
                fontSize={{ base: `5xl`, lg: `7xl` }}
                textAlign={{ base: `center`, lg: `left` }}
              >
                Hello, I&apos;m Levi!
              </Heading>
              <chakra.p
                maxW="650px"
                textAlign={{ base: `center`, lg: `left` }}
                fontSize="xl"
                mt={2}
              >
                Welcome to my website! I am using this as a way to practice some of my skills,
                and to test things out. You can see what music I am listening
                to on the{' '}
                <Link href="/music" passHref>
                  <ChakraLink>music page</ChakraLink>
                </Link>{' '}
                or the{' '}
                <Link href="/links" passHref>
                  <ChakraLink>websites</ChakraLink>
                </Link>{' '}
                that I like.
                  I am currently trying to earn a Information Technology degree in
                 at the University of Mizzou; My goal is to either find a job working with app development, or web development.
              </chakra.p>
            </Flex>
          </Flex>
          {!['base', 'sm'].includes(bp) && <AboutTerminal />}
        </Flex>
      </Box>
    </>
  );
}
