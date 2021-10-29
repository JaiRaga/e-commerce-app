import React, { useState } from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = () => {
	const [sections, setSections] = useState([
		{
			title: 'hats',
			imageUrl:
				'https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			id: 1,
		},
		{
			title: 'jackets',
			imageUrl:
				'https://images.pexels.com/photos/10009958/pexels-photo-10009958.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			id: 2,
		},
		{
			title: 'sneakers',
			imageUrl:
				'https://images.pexels.com/photos/7543640/pexels-photo-7543640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			id: 3,
		},
		{
			title: 'womens',
			imageUrl:
				'https://images.pexels.com/photos/9316290/pexels-photo-9316290.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			size: 'large',
			id: 4,
		},
		{
			title: 'mens',
			imageUrl:
				'https://images.pexels.com/photos/8096377/pexels-photo-8096377.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			size: 'large',
			id: 5,
		},
	])

	return (
		<div className='directory-menu'>
			{sections.map(({ id, title, imageUrl, size }) => (
				<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
			))}
		</div>
	)
}

export default Directory
