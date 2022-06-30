import { Heading, Text, Flex } from '@chakra-ui/react';
import Col from '../Grid/Col';
import Container from '../Grid/Container';

const AboutSection = () => {
	return (
		<Container bgColor="body" data-scroll-section py="200px" mt="-1px">
			<Col colStart={2} colEnd={[25, null, 4]}>
				<Text fontWeight="800">01 /</Text>
			</Col>

			<Col colStart={9} colEnd={[25, null, 26]}>
				<Heading
					as="h3"
					variant="h3"
					textTransform="uppercase"
					letterSpacing="4px"
				>
					Passionnate about the web technologies, i have a pixel perfect approch
					for every project. Working closely with the designer to create the
					best possible user experience.
				</Heading>

				<Heading
					as="h3"
					variant="h3"
					textTransform="uppercase"
					mt="48px"
					letterSpacing="4px"
				>
					In my free time, i like to make music with my synth and my computer.
					I'm a records collector (around 800 records in my collection). Also
					i've a strong interest in natural wine, so i love to go out with
					friends to taste some new wines.
				</Heading>
			</Col>
		</Container>
	);
};

export default AboutSection;
