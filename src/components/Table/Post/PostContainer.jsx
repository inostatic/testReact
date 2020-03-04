import React from "react";
import '../Table.css';
import StoreContext from "../../../StoreContext";
import Post from "./Post";



const PostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let data;
                let bd;
                switch (props.data) {
                    case 'SD':
                        data = 'smallData';
                        bd = 'SD';
                        break;
                    case 'BD':
                        data = 'bigData';
                        bd = 'BD';
                        break;
                }
                let state = store.getState();
                return <Post stringData={state[data][bd]} />
            }
            }
        </StoreContext.Consumer>
    )
}


export default PostContainer;

