'use client'
import { Select } from '@radix-ui/themes'
import { Status } from '@prisma/client'

const IssueStatusFilter = () => {
  const statuses: { label: string, value: Status }[] = [
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'CLOSED' }
  ]
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status..."/>
      <Select.Content>
        <Select.Item value="all">All</Select.Item>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value}>{status.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter
