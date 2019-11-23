import React from "react"
import Stack from "stack-styled/emotion/Stack"
import Container from "../components/container"
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io"
import { Flex, Box, Link } from "rebass"
function Footer() {
  return (
    <footer style={{ marginBottom: "15vh" }}>
      <Container pt={[2, 3, 4]} py={[2, 3, 4]}>
        <Stack mt={2} justifyContent="center" gridGap={1}>
          <Flex
            fontSize={[3, 4, 5]}
            justifyContent="center"
            as="ul"
            sx={{ listStyleType: "none", padding: "0" }}
          >
            <Box mr={3} as="li">
              <Link href="#" target="_blank" rel="noopener">
                <IoLogoFacebook />
              </Link>
            </Box>
            <Box mr={3} as="li">
              <Link href="#" target="_blank" rel="noopener">
                <IoLogoTwitter />
              </Link>
            </Box>
            <Box mr={3} as="li">
              <Link href="#" target="_blank" rel="noopener">
                <IoLogoInstagram />
              </Link>
            </Box>
          </Flex>

          <small>2018 &copy; Tiptop Services</small>

          <small>
            Site by:{" "}
            <Link
              href="https://www.studiodagger.com"
              target="_blank"
              rel="noopener"
            >
              Studiodagger
            </Link>
          </small>
        </Stack>
      </Container>
    </footer>
  )
}

export default Footer