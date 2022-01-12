import ReactLoading from 'react-loading';

export const Loading = ({ type, color }) => (
	<ReactLoading type={type} color={color} height={70} width={70} />
);