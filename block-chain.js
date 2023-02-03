// Create a function named blockChain that creates a block in your very own block chain. It takes 2 arguments:

// data: any valid JSON data.
// prev: the previous block, if no block are given it should use the genesis block: { index: 0, hash: '0' }.
// A block must have the following properties:

// index
// hash: a computed hash using the hashCode function provided. You will need to pass it a concatenation of the block's index, the previous block's hash and the block's stringified data.
// data: any valid object.
// prev: the previous block.
// chain: a function that accepts data as an argument, and creates the next block with it.

function blockChain(data,prev = { index: 0, hash: '0' }){
    let obj  = {
        data,
        prev,
    }
    obj.index = obj.prev.index + 1
    obj.hash = hashCode(obj.index+prev.hash+JSON.stringify(data))
    obj.chain = (data) => blockChain(data,obj)
  return obj
}