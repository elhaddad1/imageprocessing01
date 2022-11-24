import path from 'path'

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

export const validateparametars = (
    file: unknown,
    width: unknown,
    height: unknown
): string => {
    let _message = ''

    const w: number | null = width
        ? parseInt((width as string).replace(/\D/g, ''), 10)
        : null
    const h: number | null = height
        ? parseInt((height as string).replace(/\D/g, ''), 10)
        : null

    const filename = file as string
    if (
        !filename ||
        !path.parse(filename).ext ||
        path.parse(filename).ext.length <= 0
    )
        _message += ' missed or invalid file name -- '
    if (!w || w < 1) _message += ' missed or invalid file width -- '
    if (!h || h < 1) _message += ' missed or invalid file height '

    return _message
}
