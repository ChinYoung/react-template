import React from 'react';

import Button from '@components/button';
import { Wrapper } from './styles';
import { increment, decrement } from './actions';
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from './constants';

import ReactLogo from '@assets/react.svg';
import ReduxSagaLogo from '@assets/redux-saga.png';

const imageStyle = { display: 'block', margin: 'auto' };

const HomePage = ({ counter, dispatch }) => (
	<React.Fragment>
		<ReactLogo width={200} height={200} style={imageStyle} />

		<Wrapper>
			<Button onClick={() => dispatch(decrement())}>-</Button>

			<Button onClick={() => dispatch({ type: DECREMENT_ASYNC })}>Async -</Button>

			<small>{counter.count}</small>

			<Button onClick={() => dispatch({ type: INCREMENT_ASYNC })}>Async +</Button>

			<Button onClick={() => dispatch(increment())}>+</Button>
		</Wrapper>

		<img src={ReduxSagaLogo} alt="Redux Saga Logo" style={imageStyle} />
	</React.Fragment>
);

export default HomePage;
