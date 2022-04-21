import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login() {
        login()
    }
`;

export const ADD_USER = gql`
    mutation addUser() {
        addUser()
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook() {
        saveBook()
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook() {
        removeBook()
    }
`;
