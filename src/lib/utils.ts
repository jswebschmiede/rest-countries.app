export const filterHtml = (value) => {
    return value.replace(/(<([^>]+)>)/gi, '');
};
