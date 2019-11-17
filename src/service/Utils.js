const formData = new FormData();

export function HttpFileRequest(image) {
    return formData.append("image", image);
}

export function HttpCreateConfig(data) {
    return {
        headers: {
            'Content-Type': data.header
        }
    }
}