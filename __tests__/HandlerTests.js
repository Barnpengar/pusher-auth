var handler = require('../handler.js')
var cb = jest.fn()
describe('Handler', () => {
  it('should be able to auth', () => {
    var event = {body : JSON.stringify({
    	socketId: '123479.12558008',
    	channelName: 'private-gimi-217.13.233.66',
    	user: {
    		id: 1234,
    		name: 'Anders'
    	}
    })}
    var res = handler.auth(event,undefined,cb)

    expect(cb).toBeCalled();
    expect(cb).toBeCalledWith(null, {"body": "{\"channel_data\":\"{\\\"user_id\\\":1234,\\\"user_info\\\":{\\\"id\\\":1234,\\\"name\\\":\\\"Anders\\\"}}\",\"auth\":\"6bf6b63b47c82ee0c678:027e72f4f34bcfd0f8fa645eba048a874459305c3dc4f88df569b0cae105f13d\"}", "statusCode": 200});
  })
})
