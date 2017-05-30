var handler = require('../handler.js')
var cb = jest.fn()
describe('Handler', () => {
  it('should be able to auth', () => {
    var event = {body : 'socket_id=123479.12558008&channel_name=private-gimi-217.13.233.66'}
    var res = handler.auth(event,undefined,cb)

    expect(cb).toBeCalled();
    expect(cb).toBeCalledWith(null, {"body": {"auth": "6bf6b63b47c82ee0c678:4ea491bf3db8a9706a7b4939c0a48278e496bb3251a00d62fb2809b0a081d133"}, "statusCode": 200});
  })
})
