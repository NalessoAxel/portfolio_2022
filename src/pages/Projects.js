import { Heading, Box } from '@chakra-ui/react';
import BorderLayout from '../components/BorderLayout';
import Col from '../components/Grid/Col';

const Projects = () => {
	return (
		<BorderLayout>
			<Col colStart={3} colEnd={17} pt="98px">
				<Heading as="h1" variant="h1">
					Projects
				</Heading>
				<Box bgColor="primary" w="100%" h="2px" />
			</Col>
		</BorderLayout>
	);
};

export default Projects;
