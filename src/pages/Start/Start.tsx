import { MyButton } from '../../components/ui/button/MyButton'
import './start.scss'

export const Start = () => {
	return (
		<div className='container start-container'>
			<MyButton linkTo='/step-one' text='Get Started' />
		</div>
	)
}
