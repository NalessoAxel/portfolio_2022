import { ChakraProvider } from '@chakra-ui/react';
import { useRef } from 'react';
import useResizeObserver from 'use-resize-observer';
import { useRouter } from 'next/router';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import theme from '../Components/Theme/index';
import Layout from '../components/Layout';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
	const { route } = useRouter();
	const { ref, height = 1, width = 1 } = useResizeObserver();

	const container = useRef(null);

	console.log(LocomotiveScrollProvider);

	return (
		<ChakraProvider theme={theme}>
			<style jsx global>{`
				@font-face {
					font-family: 'NeueHaasDisplay';
					src: url('/Fonts/NeueHaasDisplayRoman.ttf') format('truetype');
					font-weight: 400;
					font-style: normal;
					font-display: swap;
				}
			`}</style>
			<LocomotiveScrollProvider
				options={{
					smooth: true,
					smoothMobile: true,
				}}
				watch={[route]}
				// containerRef={container}
				// onUpdate={() => height(ref.current)}
			>
				<main data-scroll-container ref={ref}>
					<Menu />
					<Component {...pageProps} />
				</main>
			</LocomotiveScrollProvider>
		</ChakraProvider>
	);
}

export default MyApp;
