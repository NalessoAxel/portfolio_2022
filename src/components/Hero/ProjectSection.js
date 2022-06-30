import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import Container from '../Grid/Container';
import Col from '../Grid/Col';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectSection = () => {
	return (
		<Container bgColor="body" data-scroll-section mt="-1px">
			<Col colStart={2} colEnd={4} mt="128px">
				<Flex align="center" h="100%">
					<Text fontWeight="800">02 /</Text>
				</Flex>
			</Col>

			<Col colStart={9} colEnd={[25, null, 26]} mt="128px">
				<Heading
					as="h2"
					variant="h2"
					textTransform="uppercase"
					letterSpacing="4px"
				>
					Latest Projects
				</Heading>
			</Col>

			<Col colStart={2} colEnd={14} mt="128px">
				<Flex align="flex-start" h="100%" flexDir="column">
					<Heading
						as="h2"
						variant="h2"
						textTransform="uppercase"
						letterSpacing="4px"
					>
						Ioda Restaurant
					</Heading>

					<Text fontSize="18px" mt="8px">
						Full stack project
					</Text>

					<Link href="/Projects" passHref>
						<Text fontSize="18px" mt="8px" cursor="pointer">
							See More
						</Text>
					</Link>
				</Flex>
			</Col>

			<Col colStart={16} colEnd={26} py="128px">
				<motion.div
					whileHover={{
						scale: 1.1,
						transition: {
							duration: 0.5,
							ease: 'easeOut',
						},
						transformOrigin: 'center',
					}}
				>
					<Flex align="center" h="100%">
						<Image
							src="/Images/ioda_bar.jpeg"
							alt="ioda"
							bgColor="secondary"
							objectFit="contain"
						/>
					</Flex>
				</motion.div>
			</Col>
		</Container>
	);
};

export default ProjectSection;
