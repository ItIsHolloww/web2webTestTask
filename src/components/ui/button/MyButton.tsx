import { clsx } from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router'
import './myButton.scss'

type MyButtonPropsType = {
	text: string
	linkTo: string
	className?: string
}
export const MyButton: FC<MyButtonPropsType> = ({
	text,
	linkTo,
	className,
}) => {
	return (
		<>
			<Link to={linkTo}>
				<button className={clsx('my-button', className)}>{text}</button>
			</Link>
		</>
	)
}
