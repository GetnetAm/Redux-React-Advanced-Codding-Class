import { MAKE_ORDER } from "./ActionsTypes";
    const intialstate ={
        noOfProducts:100
    }

const productreducer =(state =intialstate, action)=>{
    switch(action.type){
        case MAKE_ORDER: return{
            ...state,
            noOfProducts: state.noOfProducts - 1
        }

        default: return state
    }
}

export default productreducer;

// const intialState={
//     noOfProduct:100
// }

// const productrducer =(state =intialState, action)=>{
//     switch (action.type) {
//         case MAKE_ORDER:

//         return{
//             ...state,
//             noOfProduct: state.noOfProduct-1
//         }
            
            
    
//         default:
//             return state
//     }

// }

// export default productrducer;