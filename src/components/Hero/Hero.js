import { Flex, Heading, Image } from '@chakra-ui/react';

import Container from '../Grid/Container';
import Col from '../Grid/Col';

const Hero = () => {
	return (
		<Container bgColor="body" data-scroll-section>
			<Col colStart={2} colEnd={[25, null, 18]} height="100%" gap="2">
				<Heading as="h1" variant="h1" pt="62px" textTransform="uppercase">
					Front end developer
				</Heading>
				<Flex w="100%">
					<Image
						src="/Images/exalus.jpeg"
						alt="exalus"
						width="80%"
						height="270px"
						objectFit="cover"
					/>
				</Flex>
			</Col>

			<Col colStart={2} colEnd={[12, null, 12]}>
				<Flex align="flex-end" h="100%">
					<Image src="/Images/scroll_down.svg" alt="scroll down" />
				</Flex>
			</Col>

			<Col colStart={18} colEnd={26}>
				<Flex align="center" h="100%">
					<Heading as="h1" variant="h1" textTransform="uppercase">
						Based in Brussels
					</Heading>
				</Flex>
			</Col>
		</Container>
	);
};

export default Hero;
