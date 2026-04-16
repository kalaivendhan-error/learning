export class movement{
    run(){
        console.log('running')
    }
}
function stand(){
    console.log('standing')
}
function walk(){
    console.log('walking')
}

// export default movement
export {stand,walk}