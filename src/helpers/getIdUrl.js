export const getIdUrl = (url) => {
    const array = url.split('/');

    return array[array.length - 2];
};
