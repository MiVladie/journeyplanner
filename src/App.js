import React from 'react';

import Layout from './hoc/Layout/Layout';

import Menu from './containers/Menu/Menu';
import Resultative from './containers/Resultative/Resultative';

import { useStore } from './hooks-store/store';

const App = () => {
	const store = useStore()[0];

	return (
		<Layout>
			<Menu meta={store.meta} journeys={store.journeys} />

			<Resultative meta={store.meta} />
		</Layout>
	);
};

export default App;
