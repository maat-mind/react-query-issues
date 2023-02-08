import { useQuery } from '@tanstack/react-query'

const getLabelsAsync = async () => {
	const res = await fetch('https://api.github.com/repos/facebook/react/labels')
	const data = await res.json()
	return data
}

export const LabelPicker = () => {
	const labelPicker = () => {
		const labelsQuery = useQuery(['labels'], getLabelsAsync)
	}

	return (
		<div>
			<span
				className='badge rounded-pill m-1 label-picker'
				style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
			>
				Primary
			</span>
		</div>
	)
}
