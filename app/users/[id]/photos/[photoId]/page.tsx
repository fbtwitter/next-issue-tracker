interface Props {
    params: {
        photoId: number
    }
}
export default function UserDetailPhotoPage({params}: Props) {
    return (
        <>UserDetailPhotoPage {params.photoId}</>
    );
}
