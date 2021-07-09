import { useHistory } from 'react-router-dom';

export default function Welcome() {
	const history = useHistory()

  return (
    <div >
		<h1 onClick={history.push('./0')}>
			Welcome
		</h1>

    </div>
  );
}
