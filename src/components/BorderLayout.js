import { Flex, Box } from '@chakra-ui/react';
import Col from './Grid/Col';
import Container from './Grid/Container';

const BorderLayout = ({ children }) => {
	return (
		<Container bgColor="body" h="calc(100vh - 122px)">
			<Col colStart={1} colEnd={[3, null, 2]}>
				<Flex w="100%" h="100%" justifyContent="flex-end">
					<Box bgColor="primary" w="2px" h="100%" />
				</Flex>
			</Col>
			{children}
			<Col colStart={[25, null, 26]} colEnd={[26, null, 27]}>
				<Box bgColor="primary" w="2px" h="100%" />
			</Col>
		</Container>
	);
};

export default BorderLayout;
