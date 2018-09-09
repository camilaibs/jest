function fetchDataResolves() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000, 'peanut butter');
    })
}

function fetchDataFails() {
    return new Promise((resolve, reject) => {
        setTimeout(reject, 1000, 'error');
    })
}

test('the data is peanut butter', () => {
    expect.assertions(1);
    return fetchDataResolves().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchDataFails().catch(e => {
        expect(e).toMatch('error');
    });
});

test('the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchDataResolves()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return expect(fetchDataFails()).rejects.toMatch('error');
});