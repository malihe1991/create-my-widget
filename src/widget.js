import * as zoid from 'zoid/dist/zoid.frameworks'

let MyWidget = zoid.create({
    tag: 'my-widget',
    url: 'http://localhost:2000/index.htm',
    dimensions: {
        width: '400px',
        height: '200px'
    },
})

console.log(`loaded myWidget ${MyWidget} `)
export default MyWidget