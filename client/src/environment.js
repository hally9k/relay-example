import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) =>
	fetch('https://api.graph.cool/relay/v1/cjgpmqz0p1ily0111w2o4qq98', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: operation.text,
			variables
		})
	}).then(response => response.json())
)

const handlerProvider = null

const environment = new Environment({
	handlerProvider,
	network,
	store
})

export default environment
