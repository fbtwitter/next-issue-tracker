import { notFound } from "next/navigation";

interface Props {
    params: {
        id: number
    }
}

const userDetailPage = ({params: {id}}: Props) => {
    if (id > 10) {
        notFound()
    }

    return (
        <div>UserDetailPage {id}</div>
    )
}

export default userDetailPage