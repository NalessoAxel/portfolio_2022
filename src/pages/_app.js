import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import theme from '../Components/Theme/index';

function MyApp({ Component, pageProps }) {
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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
