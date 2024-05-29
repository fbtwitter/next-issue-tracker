'use client'
import { Select } from '@radix-ui/themes'
import { Issue, User } from '@prisma/client'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@/app/components'

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
    staleTime: 60 * 1000, // Time to refresh, 60 seconds
    retry: 3, // Number of time to retry when get user failed
  })

  if (isLoading) return <Skeleton height="2rem"/>

  if (error) return null

  return (
    <Select.Root defaultValue={issue.assignedToUserId || 'unassigned'} onValueChange={(val) => {
      axios.patch('/api/issues/' + issue.id, { assignedToUserId: val === 'unassigned' ? null : val })
    }}>
      <Select.Trigger placeholder="Assign..."/>
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="unassigned">Unassigned</Select.Item>
          {users?.map((user) => <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect
