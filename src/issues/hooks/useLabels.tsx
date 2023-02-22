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
	})

	return labelsQuery
}
