const reverseHistory = [
    { phrase: 'Hej', reversed: 'jeH' },
    { phrase: 'Red fox', reversed: 'deR xof' },
    { phrase: 'Hej herta', reversed: 'jeH atreh' }
];

class ReverseHistoryMockApi {
    static getReverseHistory() {
        const delay = 1000;
        return new Promise((resolve) => {
            return setTimeout(() => {
                resolve([...reverseHistory]);
            }, delay);
        });
    }

    static reversePhrase(phrase) {
        const delay = 1000;
        return new Promise((resolve) => {
            return setTimeout(() => {
                resolve({ phrase: phrase, reversed: phrase });
            }, delay);
        });
    }
}

export default ReverseHistoryMockApi;