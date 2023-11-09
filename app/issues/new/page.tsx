'use client'
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<IssueForm>()

  const onSubmit = handleSubmit(async (data) => {
    await axios.post('/api/issues', data)
    router.push('/issues')
  })

  return (
    <form onSubmit={onSubmit} className={'max-w-xl' +
      ' space-y-3'}>
      <TextField.Root>
        <TextField.Input placeholder={'Title'} {...register('title')} />
      </TextField.Root>
      <Controller render={({ field }) => <SimpleMDE placeholder={'Description'} {...field} />} name={'description'}
                  control={control}/>

      <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage
