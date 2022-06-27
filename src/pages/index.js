import { Heading, Box } from '@chakra-ui/react';
import Container from '../components/Grid/Container';
import Col from '../components/Grid/Col';

export default function Home() {
	return (
		<Container bgColor="body" h="calc(100vh - 122px)">
			<Col colStart={2} colEnd={3}>
				<Box bgColor="primary" w="2px" h="100%" />
			</Col>

			<Col
				colStart={3}
				colEnd={17}
				bgColor="body"
				height="100%"
				// borderLeft="2px solid white"
				// borderRight="2px solid white"
			>
				<Heading as="h1" variant="h1" pt="162px">
					I’m Axel Nalesso, a front end developer based in Brussels.
				</Heading>
			</Col>

			<Col colStart={26} colEnd={27}>
				<Box bgColor="primary" w="2px" h="100%" />
			</Col>
		</Container>
	);
}
