import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import { Start } from './pages/Start/Start.tsx'
import { Step } from './pages/Step/Step.tsx'

import videoStep1 from './assets/video/240515_web2web_video1_v04.mp4'
import videoStep2 from './assets/video/240515_web2web_video2_v01.mp4'
import videoStep3 from './assets/video/240515_web2web_video3_v01.mp4'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Start />} />
				<Route
					path='/step-one'
					element={<Step linkto='step-two' video={videoStep1} />}
				/>
				<Route
					path='/step-two'
					element={<Step linkto='step-three' video={videoStep2} />}
				/>
				<Route
					path='/step-three'
					element={<Step linkto='' btnText='Start Again' video={videoStep3} />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
