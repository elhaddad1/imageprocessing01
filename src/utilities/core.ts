export interface imagePaths {
    fullImagePath: string
    resizedImagePath: string
}
export const imagesPath = (): imagePaths => {
    return {
        fullImagePath: process.cwd() + '\\images\\full\\',
        resizedImagePath: process.cwd() + '\\images\\resized_images\\',
    }
}

export const newImageName = (
    file: string,
    width: number,
    height: number
): string => {
    return width + 'W_' + height + 'H_' + file
}
