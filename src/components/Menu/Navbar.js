import Container from './../Grid/Container';
import Col from './../Grid/Col';
import { Box, Flex, List, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import PropTypes from 'prop-types';

const NavItem = ({ children, to = '/' }) => (
	<Link passHref href={to}>
		<Text
			color="primary"
			lineHeight="122px"
			textStyle="sm"
			pr="34px"
			fontFamily="body"
		>
			{children}
		</Text>
	</Link>
);

NavItem.propTypes = {
	children: PropTypes.array.isRequired,
	to: PropTypes.string.isRequired,
};
const Navbar = () => {
	const Links = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Skills', href: '/skills' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<Container bgColor="body" h="100%">
			<Flex flexDir="column" w="100%">
				<Flex flexDir="row" w="100%">
					<Flex
						p="26px"
						// borderBottom="2px solid white"
						// borderRight="2px solid white"
						align="center"
						justify="center"
					>
						<Image
							src="/Images/logo.png"
							alt="logo"
							width="69px"
							height="37px"
						/>
					</Flex>

					<Col
						colStart={2}
						colEnd={26}
						bgColor="body"
						height="100%"
						w="100%"

						// borderBottom="2px solid white"
						// borderRight="2px solid white"
					>
						<Flex as={List} listStyleType="none" p="0" m="0" justify="flex-end">
							{Links.map((link, index) => (
								<NavItem key={index} to={link.href}>
									{link.name}
								</NavItem>
							))}
						</Flex>
					</Col>
				</Flex>

				<Flex>
					<Box bgColor="primary" h="2px" w="100%" />
				</Flex>
			</Flex>
		</Container>
	);
};

export default Navbar;
