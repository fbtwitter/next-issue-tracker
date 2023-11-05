'use client'
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
    return (
        <CldUploadWidget uploadPreset="e0ejmzgd">
            {({open}) => (
                <button onClick={() =>  open()} className="btn btn-primary">Upload</button>
            )}
        </CldUploadWidget>
    );
};

export default UploadPage