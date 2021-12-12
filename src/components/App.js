import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import * as actions from '../actions'
class App extends Component {

    renderButton(){
        if (this.props.auth){
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        } else {
            return <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
        };
    }

    renderHeader(){
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/post">Post A Comment</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                {this.renderHeader()}
                    <Routes>
                        <Route path="/post" element={<CommentBox  history={this.props.history}/>} />
                        <Route exact path="/" element={<CommentList />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { auth: state.auth}
}

export default connect(mapStateToProps, actions)(App)
