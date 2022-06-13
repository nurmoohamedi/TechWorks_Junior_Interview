const result = promiseFunction()

result.then(resolve => {
    console.log(`Промис ${typeof resolve === 'string' ? '' : 'НЕ'} работает ${typeof resolve === 'string' ? resolve : ''}`)
})
