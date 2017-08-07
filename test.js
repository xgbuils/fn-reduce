const test = require('tape')
const tapSpec = require('tap-spec')

const reduce = require('./')

const array = Object.freeze([1, 2, 3, 4, 5])
const string = 'abcd'
const sum = (a, b) => b + a

test('reduce', function (t) {
    t.test('empty array', function (st) {
        const result = reduce(sum, 5, [])
        st.deepEqual(result, 5,
            'must return the initial value')
        st.end()
    })
    t.test('non-empty array', function (st) {
        const result = reduce(sum, 5, array)
        st.deepEqual(result, 20,
            'must behave like array.reduce(sum, 5)')
        st.end()
    })

    t.test('empty string', function (st) {
        const result = reduce(sum, 'u', '')
        st.deepEqual(result, 'u',
            'must return the initial value')
        st.end()
    })

    t.test('non-empty array', function (st) {
        const result = reduce(sum, 'u', string)
        st.deepEqual(result, 'dcbau',
            'must behave like [...string].reduce(sum, "u")')
        st.end()
    })
    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
