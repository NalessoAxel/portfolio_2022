import { Box, Flex, List, Text } from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

import Col from './../Grid/Col';
import Container from './../Grid/Container';

const NavItem = ({ children, to = '/' }) => (
	<Link passHref href={to}>
		<Text
			color="primary"
			lineHeight="122px"
			textStyle="sm"
			pr="34px"
			fontFamily="body"
			cursor="pointer"
		>
			{children}
		</Text>
	</Link>
);

const Navbar = () => {
	const Links = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/Projects' },
		{ name: 'About', href: '/About' },
		{ name: 'Contact', href: '/Contact' },
	];

	return (
		<Container
			bgColor="body"
			data-scroll-section
			data-scroll-sticky
			zIndex="100"
		>
			<Flex w="100%">
				<Flex p="26px" align="center" justify="center" w="100%">
					<Image
						src="/Images/logo_black.png"
						alt="logo"
						width="69px"
						height="37px"
					/>
				</Flex>

				<Flex>
					<Box bgColor="primary" h="100%" w="2px" />
				</Flex>
			</Flex>

			<Col
				colStart={2}
				colEnd={[25, null, 26]}
				bgColor="body"
				height="100%"
				w="100%"
			>
				<Flex as={List} listStyleType="none" p="0" m="0" justify="flex-end">
					{Links.map((link, index) => (
						<NavItem key={index} to={link.href}>
							{link.name}
						</NavItem>
					))}
				</Flex>
			</Col>

			<Col colStart={[25, null, 26]} colEnd={[26, null, 27]}>
				<Flex w="100%" h="100%" justify="flex-start">
					<Box bgColor="primary" w="2px" h="100%" />
				</Flex>
			</Col>

			<Col colStart={1} colEnd={27}>
				<Box bgColor="primary" h="2px" w="100%" />
			</Col>
		</Container>
	);
};

export default Navbar;
