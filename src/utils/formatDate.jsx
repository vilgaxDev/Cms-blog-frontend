const formatDate = (inputDate) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(inputDate).toLocaleDateString('en-US', options);
}

export default formatDate