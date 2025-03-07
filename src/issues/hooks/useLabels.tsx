import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../../api/githubApi'
import { Label } from '../interfaces/label'
import { sleep } from '../../helpers/sleep'

const getLabelsAsync = async (): Promise<Label[]> => {
	await sleep(2)

	const { data } = await githubApi.get('/labels')
	return data
}

export const useLabels = () => {
	const labelsQuery = useQuery(['labels'], getLabelsAsync, {
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60,
		placeholderData: [
			{
				id: 791921801,
				node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
				url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
				name: '❤️',
				color: 'ffffff',
				default: false,
				description: null,
			},
		],
	})

	return labelsQuery
}
