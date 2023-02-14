import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../../api/githubApi'

const getLabelsAsync = async () => {
	const { data } = await githubApi.get('/labels')
	return data
}

export const LabelPicker = () => {
	const labelsQuery = useQuery(['labels'], getLabelsAsync, {
		refetchOnWindowFocus: false,
	})

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
