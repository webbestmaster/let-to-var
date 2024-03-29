// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';

type PropsType = ContextRouterType;
type StateType = null;

// eslint-disable-next-line react/prefer-stateless-function
export class Login extends Component<PropsType, StateType> {
    render(): Node {
        return <h1>Login page</h1>;
    }
}
