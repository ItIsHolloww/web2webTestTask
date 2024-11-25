import { FC } from 'react'
import { MyButton } from '../../components/ui/button/MyButton'
import './step.scss'

type stepPropsType = {
	linkto: string
	video: string
	btnText?: string
}

export const Step: FC<stepPropsType> = ({
	linkto,
	btnText = 'Next',
	video,
}) => {
	return (
		<div className='step-container container'>
			<video className='step-video' src={video} loop autoPlay></video>
			<MyButton
				text={btnText}
				className='my-button--absolute'
				linkTo={`/${linkto}`}
			/>
		</div>
	)
}
