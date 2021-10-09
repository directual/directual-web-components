

export function addUrlParam(param) {
    //params = [{ key: "param1", value: "value1" }, { key: "param2", value: "20" }]
    const queryString = typeof window !== 'undefined' ? window.location.search : '';
    const urlParams = new URLSearchParams(queryString);
    const params = []
    for (const [key, value] of urlParams) {
        key != param.key && params.push({key: key, value: value})
    }
    params.push(param)
    if (history.pushState) {
        const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        const queryParams = '?' + params.map(p => p.key + "=" + p.value).join('&')
        const newUrl = baseUrl + queryParams;
        history.pushState(null, null, newUrl);
    }
    if (!history.pushState) {
        console.warn('History API is not supported');
    }
}

export function removeUrlParam(param) {
    //params = [{ key: "param1", value: "value1" }, { key: "param2", value: "20" }]
    // if (history.pushState) {
    //     const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    //     const queryParams = '?' + params.map(p => p.key + "=" + p.value).join('&')
    //     const newUrl = baseUrl + queryParams;
    //     history.pushState(null, null, newUrl);
    // }
    // if (!history.pushState) {
    //     console.warn('History API is not supported');
    // }
}

export function clearURL() {
    if (!history.pushState) {
        console.warn('History API is not supported');
    }
    if (history.pushState) {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        history.pushState(null, null, baseUrl);
    }
}